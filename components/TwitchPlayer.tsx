import { useState } from 'react'
import styles from '../styles/componentStyles/TwitchPlayer.module.css';
import * as React from 'react';
import { useTwitchPlayer } from '../hooks/useTwitchPlayer';
import TwitchPlayerControls from './TwitchPlayerControls';

// TODO: Seeking forward/back cannot be called in succession until previous seek completes. This is cumbersome and frustrating as a user. A recursive solution may be useful to solve this. 



interface TwitchPlayerProps {
  videoId: string;
}

const TwitchPlayer = ({ videoId }: TwitchPlayerProps) => {
  const [theaterMode, setTheaterMode] = useState(false);

  // This local state is used to avoid the long delays of an API call to check muted state when toggling icons and UI
  const [playerMuted, setPlayerMuted] = useState(true);

  // useRef must be used here to avoid losing reference to timeout IDs as the component re-renders between hiding/showing controls
  const inactivityTimeout = React.useRef<null | NodeJS.Timeout>(null);
  const enableCall = React.useRef(true);

  // Indicates whether the user is moving their mouse over the video (i.e. user is active)
  const [userActive, setUserActive] = useState(false);

  // The user should be able to manually disable the overlay to interact with the player in certain circumstances, e.g. mature content, reloading player, etc.
  const [disableControls, setDisableControls] = useState(false);

  // TODO: Consider changing this to isPaused boolean to reflect Twitch API
  // Initialise playerState in the PAUSED state, represented by 2 (playing state is 1)
  const [playerState, setPlayerState] = useState(-1);

  // A dynamic state that indicates whether the player is currently seeking forwards or backwards
  const [currentlySeeking, setCurrentlySeeking] = useState(false);

  // The currently projected time (in seconds) that the player should be at once the currently queued seek completes
  const [projectedTime, setProjectedTime] = React.useState<null | number>(null);

  // Adds the YT Iframe to the div#player returned below
  const { player } = useTwitchPlayer(videoId);

  // Ensure the local playerState state is set on play/pause events. This ensures other elements modify with each of the changes as needed
  React.useEffect(() => {
    if (player) {
      player.addEventListener('play', () => {
        setPlayerState(1);
      });

      player.addEventListener('pause', () => {
        setPlayerState(2);
      });

      // Reset the 'currentlySeeking' state whenever a seek completes
      player.addEventListener('seek', () => {
        setCurrentlySeeking(false);
        setProjectedTime(null);
      });
    }
  }, [player]);

  React.useEffect(() => {
    if (projectedTime && !currentlySeeking && player) {
      player.seek(projectedTime);
    }
  }, [projectedTime, currentlySeeking, player])

  // A general user activity function. Use this whenever the user performs an 'active' action and it will signal the user is interacting with the video, which then enables other features such as showing controls
  const signalUserActivity = () => {
    setUserActive(true);
    clearTimeout(inactivityTimeout.current as NodeJS.Timeout);

    inactivityTimeout.current = setTimeout(function () {
      setUserActive(false);
    }, 3000);
  };

  // Use this to limit how many times the mousemove handler is called. Note this function itself will still be called every time
  const throttleMousemove = () => {
    if (!enableCall.current) {
      return;
    }

    enableCall.current = false;
    signalUserActivity();
    // Unsure exactly which throttle timeout will work best, but 500 seems adequate for now
    setTimeout(() => enableCall.current = true, 500);
  };

  const skipForward = React.useCallback((timeToSkipInSeconds: number) => {
    if (player) {
      const currentTime = player.getCurrentTime();
      player.seek(currentTime + timeToSkipInSeconds);
    }
  }, [player]);

  const skipBackward = React.useCallback((timeToSkipInSeconds: number) => {
    if (player) {
      let currentTime = player.getCurrentTime();
      if (projectedTime) {    // Presence of a projected time implies we are currently mid-seek
        // Adjust projected time using that as the base, rather than a getCurrentTime() call
        currentTime = projectedTime;
      }
      setProjectedTime(currentTime - timeToSkipInSeconds);
      // player.seek(currentTime - timeToSkipInSeconds);
    }
  }, [player, projectedTime]);

  // This function is distinct to manually setting a specific volume level, but counts as user activity
  const toggleMute = React.useCallback(() => {
    signalUserActivity();
    if (!player) {
      return;
    }
    if (player.getMuted()) {
      setPlayerMuted(false);
      player.setMuted(false);
    } else {
      setPlayerMuted(true);
      player.setMuted(true);
    }
  }, [player]);

  // Use this function to play a paused video, or pause a playing video. Intended to activate on clicking the video, or pressing spacebar
  const playOrPauseVideo = React.useCallback(() => {
    if (player) {
      if (player.isPaused()) {
        player.play();
        // A longer timeout is used here because it can be quite anti-user experience to have controls and cursor fade almost immediately after pressing play. 
        setTimeout(() => {
          setUserActive(false);    // ensure video controls fade   
        }, 1000)

      } else {
        player.pause();
      }
    }
  }, [player]);

  // Call this function to switch the iframe/wrapper in and out of fullscreen mode. Esc key press will work as intended without explicitly adding this functionality
  const toggleFullscreen = () => {
    const wrapper: HTMLDivElement | null = document.querySelector("#wrapper");

    // These are async functions, but we are not particularly interested in error handling. This is mainyl to avoid linting errors
    if (!document.fullscreenElement && wrapper) {
      wrapper.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen()
        .catch((err) => console.error(err))
    }

    // Move focus to the parent wrapper rather than remaining on the toggleFullscreen btn. This is the extected UX interaction
    if (wrapper) { wrapper.focus() }
  }

  // Use this to toggle between theater mode. Can be attached to a button or keypress as needed
  const toggleTheater = () => {
    setTheaterMode((prevState) => !prevState);

    // Move focus to the parent wrapper rather than remaining on the toggleFullscreen btn. This is the extected UX interaction
    const wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    if (wrapper) { wrapper.focus() }
  };

  // A global keypress handler to allow the user to control the video regardless of where they are on the page. 
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const focusedElement = event.target as HTMLElement;

      // Ensure these key actions do not mess with normal button expectations and functionality
      if (focusedElement.nodeName === "BUTTON" || focusedElement.nodeName === "INPUT") {
        if (focusedElement.className.includes('controlsBtn')) {   // user is interacting with video controls
          signalUserActivity();
        }
        return;
      }

      if (!player) {
        return;
      }

      switch (event.key) {
        case "k":
        case " ":
          playOrPauseVideo();
          break;
        case "m":
          toggleMute();
          signalUserActivity();
          break;
        case "f":
          toggleFullscreen();
          break;
        case "t":
          toggleTheater();
          break;
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          player.setVolume(player.getVolume() - 0.05);
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          player.setVolume(player.getVolume() + 0.05);
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          skipBackward(10);
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          skipForward(10)
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    }
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, [playOrPauseVideo, player, toggleMute, skipForward, skipBackward])


  return (
    <div>
      <div id="wrapper" className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal} ${player ? '' : styles.wrapperInitial}`} data-testid="wrapper" onMouseLeave={() => setUserActive(false)} tabIndex={0}>
        <div id="player"></div>
        <div
          className={`${styles.overlay} ${(userActive || playerState === 2) ? '' : styles.overlayInactive} ${disableControls ? styles.overlayDisabled : ''}`}
          onClick={playOrPauseVideo}
          onDoubleClick={toggleFullscreen}
          onMouseMove={throttleMousemove}
          data-testid="overlay"
        >
        </div>

        {player && (
          <div className={`${styles.controls} ${(userActive || playerState === 2) ? '' : styles.controlsHide} ${disableControls ? styles.controlsDisabled : ''}`} onMouseMove={throttleMousemove} data-testid="customControls">
            <TwitchPlayerControls
              player={player}
              playerState={playerState}
              toggleFullscreen={toggleFullscreen}
              toggleTheater={toggleTheater}
              togglePlay={playOrPauseVideo}
              toggleMute={toggleMute}
              playerMuted={playerMuted}
              skipForward={skipForward}
              skipBackward={skipBackward}
            />
          </div>
        )}

        <div className={`${styles.gradient} ${(userActive || playerState === 2) ? '' : styles.gradientHide} ${disableControls ? styles.gradientHide : ''}`} data-testid="gradient"></div>

      </div>
      <button onClick={() => setDisableControls((prevState) => !prevState)}>Toggle custom controls</button>
    </div >
  )
}

export default TwitchPlayer;
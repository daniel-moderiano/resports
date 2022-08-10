import { useYouTubeIframe } from '../hooks/useYouTubeIframe';
import { useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';
import YouTubeVideoControls from './YouTubeVideoControls';
import * as React from 'react';

interface YouTubePlayerProps {
  videoId: string;
}

const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const [theaterMode, setTheaterMode] = useState(false);

  // This local state is used to avoid the long delays of an API call to check muted state when toggling icons and UI
  const [playerMuted, setPlayerMuted] = useState(false);

  // useRef must be used here to avoid losing reference to timeout IDs as the component re-renders between hiding/showing controls
  const inactivityTimeout = React.useRef<null | NodeJS.Timeout>(null);
  const enableCall = React.useRef(true);

  // Indicates whether the user is moving their mouse over the video (i.e. user is active)
  const [userActive, setUserActive] = useState(false);

  // Initialise playerState in the UNSTARTED state, whose code is -1. This way we can detect an initial change if necessary
  const [playerState, setPlayerState] = useState(-1);

  // Allow the user to manually revert to standard YT controls to allow a manual adjustment to video quality
  const [showYTControls, setShowYTControls] = useState(true);

  const onPlayerReady = React.useCallback((event: YT.PlayerEvent) => {
    // TODO
  }, [])

  // Adjust the component state to reflect the player state when the user plays/pauses/ends
  const onPlayerStateChange = React.useCallback((event: YT.OnStateChangeEvent) => {
    // TODO: Ensure this is set for anything not play or pause
  }, []);

  // Adds the YT Iframe to the div#player returned below
  const { player } = useYouTubeIframe(videoId, onPlayerReady, onPlayerStateChange);

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
  }

  // This function is distinct to manually setting a specific volume level, but counts as user activity
  const toggleMute = React.useCallback(() => {
    signalUserActivity();
    if (!player) {
      return;
    }
    if (player.isMuted()) {
      setPlayerMuted(false);
      player.unMute();
    } else {
      setPlayerMuted(true);
      player.mute();
    }
  }, [player]);


  // Use this function to play a paused video, or pause a playing video. Intended to activate on clicking the video, or pressing spacebar
  const playOrPauseVideo = React.useCallback(() => {
    if (player) {
      if (player.getPlayerState() === 1) {
        setPlayerState(2);
        setTimeout(() => {    // Give the gradient time to fade in so you can be sure the YT controls are hidden
          player.pauseVideo();
        }, 350)
      } else {
        player.playVideo();

        setTimeout(() => {    // Give the gradient time to fade so you can be sure the YT controls are hidden
          setPlayerState(1);
        }, 100);

        // A longer timeout is used here because it can be quite anti-user experience to have controls and cursor fade almost immediately after pressing play. 
        setTimeout(() => {
          setUserActive(false);    // ensure video controls fade   
        }, 1000)
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

      // do not alter the normal events for keyboard events on buttons, but ensure they trigger a user active state
      if (focusedElement.nodeName === "BUTTON") {
        signalUserActivity();
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
          break;
        case "f":
          toggleFullscreen();
          break;
        case "t":
          toggleTheater();
          break;
        case "Down": // IE/Edge specific value
        case "ArrowDown":
          player.setVolume(player.getVolume() - 5);
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          player.setVolume(player.getVolume() + 5);
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          // Do something for "left arrow" key press.
          player.seekTo(player.getCurrentTime() - 5, true);
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          // Do something for "right arrow" key press.
          player.seekTo(player.getCurrentTime() + 5, true);
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    }
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, [playOrPauseVideo, player, toggleMute])


  return (
    <div>
      <div id="wrapper" className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal} ${player ? '' : styles.wrapperInitial}`} data-testid="wrapper" onMouseLeave={() => setUserActive(false)} tabIndex={0}>
        <div id="player"></div>
        {!showYTControls && (
          <div
            className={`${styles.overlay} ${playerState === 1 ? styles.overlayPlaying : ''} ${playerState === 2 ? styles.overlayPaused : ''} ${playerState === 0 ? styles.overlayEnd : ''} ${(userActive || playerState === 2) ? '' : styles.overlayInactive}`}
            onClick={playOrPauseVideo}
            onDoubleClick={toggleFullscreen}
            onMouseMove={throttleMousemove}
          >
          </div>
        )}

        {(!showYTControls && player) && (
          <div className={`${styles.controls} ${(userActive || playerState === 2) ? '' : styles.controlsHide}`} onMouseMove={throttleMousemove} data-testid="customControls">
            <YouTubeVideoControls
              player={player}
              playerState={playerState}
              toggleFullscreen={toggleFullscreen}
              toggleTheater={toggleTheater}
              togglePlay={playOrPauseVideo}
              toggleMute={toggleMute}
              playerMuted={playerMuted}
            />
          </div>
        )}

        {!showYTControls && (
          <div className={`${styles.gradient} ${(userActive || playerState === 2) ? '' : styles.gradientHide}`}></div>
        )}

        {showYTControls && (
          <div className={styles.YTcontrolsBlocker} data-testid="controlsBlocker">
            <div className={styles.YTprogressBlocker}></div>
            <div className={styles.blockersContainer}>
              <div className={styles.leftControlsBlocker}></div>
              <div className={styles.rightControlsBlocker}></div>
            </div>
          </div>
        )}
      </div>

      <div className="playerMode">
        <button onClick={() => setShowYTControls(true)}>Show YT Controls</button>
        <button onClick={() => setShowYTControls(false)}>Hide YT Controls</button>
        <p>{showYTControls ? 'YouTube mode' : 'Custom mode'}</p>
      </div>
    </div >
  )
}

export default YouTubePlayer;
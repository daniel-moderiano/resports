import { useYouTubeIframe } from '../hooks/useYouTubeIframe';
import { useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';
import YouTubeVideoControls from './YouTubeVideoControls';
import * as React from 'react';

interface YouTubeCustomPlayerProps {
  videoId: string;
}

const YouTubeCustomPlayer = ({ videoId }: YouTubeCustomPlayerProps) => {
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

  // The currently projected time (in seconds) that the player should be at once the currently queued seek completes.
  // When this is not null, it implies we are currently performing a seek() call.
  const [projectedTime, setProjectedTime] = React.useState<null | number>(null);

  const onPlayerStateChange = React.useCallback((event: YT.OnStateChangeEvent) => {
    if (event.data === 1) {   // playing has commenced, e.g. after a successful seek
      setProjectedTime(null);
    }
  }, [])

  // Adds the YT Iframe to the div#player returned below
  const { player } = useYouTubeIframe(videoId, true, onPlayerStateChange);



  // A general user activity function. Use this whenever the user performs an 'active' action and it will signal the user is interacting with the video, which then enables other features such as showing controls
  const signalUserActivity = () => {
    setUserActive(true);
    clearTimeout(inactivityTimeout.current as NodeJS.Timeout);

    inactivityTimeout.current = setTimeout(function () {
      setUserActive(false);
    }, 3000);
  };




  // A critical effect hook that essentially performs the seek functions scheduled by user clicks and key presses. The 500 ms timeout enables the compound seeking to still work when the seek is 'instant' to a pre-buffered section of video
  React.useEffect(() => {
    if (projectedTime && player) {
      setTimeout(() => {
        player.seekTo(projectedTime, true);
      }, 500)
    }
  }, [projectedTime, player])

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

  const scheduleSkipForward = React.useCallback((timeToSkipInSeconds: number) => {
    if (player) {
      let currentTime = player.getCurrentTime();
      if (projectedTime) {    // A projected time implies we are currently mid-seek
        // Adjust current time using projected time as the base, rather than a getCurrentTime call, thus queuing the calls. E.g. user rapidly clicks +10 min 5 times -> this will ensure we skip back 50 mins
        currentTime = projectedTime;
      }
      setProjectedTime(currentTime + timeToSkipInSeconds);
    }
  }, [player, projectedTime]);

  const scheduleSkipBackward = React.useCallback((timeToSkipInSeconds: number) => {
    if (player) {
      let currentTime = player.getCurrentTime();
      if (projectedTime) {    // A projected time implies we are currently mid-seek
        // Adjust current time using projected time as the base, rather than a getCurrentTime call, thus queuing the calls.
        currentTime = projectedTime;
      }
      setProjectedTime(currentTime - timeToSkipInSeconds);
    }
  }, [player, projectedTime]);

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

      // Ensure these key actions do not mess with normal button expectations and functionality
      if (focusedElement.nodeName === "BUTTON") {
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
          player.setVolume(player.getVolume() - 5);
          break;
        case "Up": // IE/Edge specific value
        case "ArrowUp":
          player.setVolume(player.getVolume() + 5);
          break;
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
          scheduleSkipBackward(10);
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
          scheduleSkipForward(10)
          break;
        default:
          return; // Quit when this doesn't handle the key event.
      }
    }
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    }
  }, [playOrPauseVideo, player, toggleMute, scheduleSkipForward, scheduleSkipBackward])


  return (
    <div>
      <div id="wrapper" className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal} ${player ? '' : styles.wrapperInitial}`} data-testid="wrapper" onMouseLeave={() => setUserActive(false)} tabIndex={0}>
        <div id="player"></div>
        <div
          className={`${styles.overlay} ${playerState === 1 ? styles.overlayPlaying : ''} ${playerState === 2 ? styles.overlayPaused : ''} ${playerState === 0 ? styles.overlayEnd : ''} ${(userActive || playerState === 2) ? '' : styles.overlayInactive}`}
          onClick={playOrPauseVideo}
          onDoubleClick={toggleFullscreen}
          onMouseMove={throttleMousemove}
          data-testid="overlay"
        >
        </div>

        {player && (
          <div className={`${styles.controls} ${(userActive || playerState === 2) ? '' : styles.controlsHide}`} onMouseMove={throttleMousemove} data-testid="customControls">
            <YouTubeVideoControls
              player={player}
              playerState={playerState}
              toggleFullscreen={toggleFullscreen}
              toggleTheater={toggleTheater}
              togglePlay={playOrPauseVideo}
              toggleMute={toggleMute}
              playerMuted={playerMuted}
              skipForward={scheduleSkipForward}
              skipBackward={scheduleSkipBackward}
              projectedTime={projectedTime}
            />
          </div>
        )}

        <div className={`${styles.gradient} ${(userActive || playerState === 2) ? '' : styles.gradientHide}`} data-testid="gradient"></div>

      </div>
    </div >
  )
}

export default YouTubeCustomPlayer;
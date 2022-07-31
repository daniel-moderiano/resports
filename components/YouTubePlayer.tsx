import { useYoutubeIframe } from 'hooks/useYouTubeIframe';
import { useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';
import YouTubeVideoControls from './YouTubeVideoControls';
import * as React from 'react'

interface YouTubePlayerProps {
  videoId: string;
}

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const [theaterMode, setTheaterMode] = useState(false);

  // useRef must be used here to avoid losing reference to timeout IDs as the component re-renders between hiding/showing controls
  const inactivityTimeout = React.useRef<null | NodeJS.Timeout>(null);
  const enableCall = React.useRef(true);

  // Indicates whether the user is moving their mouse over the video (i.e. user is active)
  const [userActive, setUserActive] = useState(false);

  // Initialise in the unstarted state
  const [playerState, setPlayerState] = useState(-1);

  // Once the YT Player is initialised, set it to this state. This is used to ensure an active player is passed to any children props or other relevant functions calling player functions
  const [activePlayer, setActivePlayer] = React.useState<YT.Player | null>(null);

  function onPlayerReady(event: YT.PlayerEvent) {
    if (player) {
      setActivePlayer(player)
      player.playVideo();
    }
  }

  // Adjust the component state to reflect the player state when the user plays/pauses/ends
  function onPlayerStateChange(event: YT.OnStateChangeEvent) {
    // TODO: Ensure this is set for anything not play or pause
    // setPlayerState(event.data)
  }

  const { player } = useYoutubeIframe(videoId, onPlayerReady, onPlayerStateChange);

  // Used to show controls on mouse movement, and hide once mouse is still for a short time
  const handleMouseMove = () => {
    console.log('Mousemove call');

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
    handleMouseMove();
    // Unsure exactly which throttle timeout will work best. 
    setTimeout(() => enableCall.current = true, 500);
  }


  // Use this function to play a paused video, or pause a playing video. Intended to activate on clicking the video, or pressing spacebar
  const playOrPauseVideo = () => {
    if (player) {
      if (player.getPlayerState() === 1) {
        setPlayerState(2);
        setTimeout(() => {
          player.pauseVideo();
        }, 350)
      } else {
        player.playVideo();

        setTimeout(() => {
          setPlayerState(1);
        }, 100);

        // A longer timeout is used here because it can be quite anti-user experience to have controls and cursor fade almost immediately after pressing play. 
        setTimeout(() => {
          setUserActive(false);    // ensure video controls fade   
        }, 1000)
      }
    }
  };

  // Call this function to switch the iframe/wrapper in and out of fullscreen mode. Esc key press will work as intended without explicitly adding this functionality
  const toggleFullscreen = () => {
    const wrapper: HTMLDivElement | null = document.querySelector("#wrapper");

    if (!document.fullscreenElement && wrapper) {
      wrapper.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen()
        .catch((err) => console.error(err))
    }
  }

  // Use this to toggle between theater mode. Should be attached to a theater button and potentially a keyboard shortcut
  const toggleTheater = () => { setTheaterMode((prevState) => !prevState) };


  return (
    <>
      <div id="wrapper" className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal}`} data-testid="wrapper" onMouseLeave={() => setUserActive(false)}>
        <div id="player"></div>
        <div
          className={`${styles.overlay} ${playerState === 1 ? styles.overlayPlaying : ''} ${playerState === 2 ? styles.overlayPaused : ''} ${playerState === 0 ? styles.overlayEnd : ''} ${(userActive || playerState === 2) ? '' : styles.overlayInactive}`}
          onClick={playOrPauseVideo}
          onDoubleClick={toggleFullscreen}
          onMouseMove={throttleMousemove}

        >
        </div>

        <div className={playerState === 2 ? styles.blockerActive : styles.blockerInactive} onMouseMove={throttleMousemove}></div>

        {player && (
          <div className={`${styles.controls} ${(userActive || playerState === 2) ? '' : styles.controlsHide}`} onMouseMove={throttleMousemove}>
            <YouTubeVideoControls
              player={player}
              playerState={playerState}
              userActive={userActive}
              setUserActive={setUserActive}
              setPlayerState={setPlayerState}
              inactivityTimer={inactivityTimeout}
              toggleFullscreen={toggleFullscreen}
              toggleTheater={toggleTheater}
              togglePlay={playOrPauseVideo}
            />
          </div>
        )}
        <div className={`${styles.gradient} ${(userActive || playerState === 2) ? '' : styles.gradientHide}`}>

        </div>
      </div>




    </>
  )
}

export default YouTubePlayer
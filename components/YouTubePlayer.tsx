import { useYoutubeIframe } from 'hooks/useYouTubeIframe';
import { useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';
import YouTubeVideoControls from './YouTubeVideoControls';

interface YouTubePlayerProps {
  videoId: string;
}

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const [theaterMode, setTheaterMode] = useState(false);

  let inactivityTimeout: NodeJS.Timeout;
  const timeouts: NodeJS.Timeout[] = [];
  let enableCall = true;

  // Indicates whether the user is moving their mouse over the video (i.e. user is active)
  const [userActive, setUserActive] = useState(false);



  // Initialise in the unstarted state
  const [playerState, setPlayerState] = useState(-1);

  function onPlayerReady(event: YT.PlayerEvent) {
    if (player) {
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
    console.log(timeouts);

    // Set a fake timeout to get the highest timeout id
    const highestTimeoutId = setTimeout(";");
    for (let i = 0; i < highestTimeoutId; i++) {
      clearTimeout(i);
    }

    setUserActive(true);
    console.log('Clearing timeout', inactivityTimeout);
    clearTimeout(inactivityTimeout);

    inactivityTimeout = setTimeout(function () {
      console.log(`Calling timeout`, inactivityTimeout);

      setUserActive(false);
    }, 3000);
    timeouts.push(inactivityTimeout)
  };


  const throttleMousemove = () => {
    if (!enableCall) {
      return;
    }

    enableCall = false;
    handleMouseMove();
    // Unsure exactly which throttle timeout will work best. 
    setTimeout(() => enableCall = true, 500);
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


  return (
    <>
      <div id="wrapper" className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal}`} data-testid="wrapper">
        <div id="player"></div>
        <div
          className={`${styles.overlay} ${playerState === 1 ? styles.overlayPlaying : ''} ${playerState === 2 ? styles.overlayPaused : ''} ${playerState === 0 ? styles.overlayEnd : ''} ${(userActive || playerState === 2) ? '' : styles.overlayInactive}`}
          onClick={playOrPauseVideo}
          onDoubleClick={toggleFullscreen}
          onMouseMove={throttleMousemove}
          onMouseLeave={() => setUserActive(false)}
        >
        </div>

        <div className={playerState === 2 ? styles.blockerActive : styles.blockerInactive} onMouseMove={throttleMousemove}></div>
        {/* <div className={`${styles.controls} ${(userActive || playerState === 2) ? '' : styles.controlsHide}`} >
          <button onClick={playVideoWithDelay}>Play</button>
          <button onClick={pauseVideoWithDelay}>Pause</button>
          <button onClick={toggleFullscreen}>Fullscreen</button>
          <button onClick={() => { setTheaterMode((prevState) => !prevState) }}>Toggle theater mode</button>
        </div> */}
        {player && (
          <div className={`${styles.controls} ${(userActive || playerState === 2) ? '' : styles.controlsHide}`} onMouseMove={throttleMousemove} onMouseLeave={() => setUserActive(false)}>
            <YouTubeVideoControls
              player={player}
              userActive={userActive}
              setUserActive={setUserActive}
              setPlayerState={setPlayerState}
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
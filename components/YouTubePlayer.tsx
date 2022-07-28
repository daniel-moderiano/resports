import { useYoutubeIframe } from 'hooks/useYouTubeIframe';
import { useEffect, useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';

interface YouTubePlayerProps {
  videoId: string;
}

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const [theaterMode, setTheaterMode] = useState(false);
  const [showControls, setShowControls] = useState(false);

  // Indicates whether the user is moving their mouse over the video (i.e. user is active)
  const [userActive, setUserActive] = useState(false);

  let inactivityTimeout: NodeJS.Timeout;

  // Initialise in the unstarted state
  const [playerState, setPlayerState] = useState(-1);

  function onPlayerReady(event: YT.PlayerEvent) {
    console.log('Player is ready');
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

  const playVideoWithDelay = () => {
    if (player) {
      player.playVideo();
      setTimeout(() => {
        setPlayerState(1);
      }, 100);
    }
  };

  const pauseVideoWithDelay = () => {
    if (player) {
      setPlayerState(2);
      setTimeout(() => {
        player.pauseVideo();
      }, 400)
    }
  };

  // Used to show controls on mouse movement, and hide once mouse is still for a short time
  const handleMouseMove = () => {
    setUserActive(true)

    clearTimeout(inactivityTimeout);

    inactivityTimeout = setTimeout(function () {
      setUserActive(false);
    }, 2000);
  }


  // Use this function to play a paused video, or pause a playing video. Intended to activate on clicking the video, or pressing spacebar
  const playOrPauseVideo = () => {
    if (player && player.getPlayerState() === 1) {
      pauseVideoWithDelay();
    } else {
      playVideoWithDelay();
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
          className={`${styles.overlay} ${playerState === 1 ? styles.overlayPlaying : ''} ${playerState === 2 ? styles.overlayPaused : ''} ${playerState === 0 ? styles.overlayEnd : ''}`}
          onClick={playOrPauseVideo}
          onDoubleClick={toggleFullscreen}
          onMouseMove={handleMouseMove}>
        </div>

        <div className={playerState === 2 ? styles.blockerActive : styles.blockerInactive}></div>
      </div>

      {userActive && <button onClick={playVideoWithDelay}>Play</button>}
      <button onClick={pauseVideoWithDelay}>Pause</button>
      <button onClick={toggleFullscreen}>Fullscreen</button>
      <button onClick={() => { setTheaterMode((prevState) => !prevState) }} className={styles.toggle}>Toggle theater mode</button>
    </>
  )
}

export default YouTubePlayer
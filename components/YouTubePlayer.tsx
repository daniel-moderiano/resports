import { useYoutubeIframe } from 'hooks/useYouTubeIframe';
import { useEffect, useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';

interface YouTubePlayerProps {
  videoId: string;
}

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const [theaterMode, setTheaterMode] = useState(false);

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
    setPlayerState(event.data)
  }

  const { player } = useYoutubeIframe(videoId, onPlayerReady, onPlayerStateChange);

  const playVideoWithDelay = () => {
    if (player) {
      setTimeout(() => {
        player.playVideo();
      }, 350)
    }
  };

  const pauseVideoWithDelay = () => {
    if (player) {
      setTimeout(() => {
        player.pauseVideo();
      }, 350)
    }
  };


  // Use this function to play a paused video, or pause a playing video. Intended to activate on clicking the video, or pressing spacebar
  const playOrPauseVideo = () => {
    if (player) {
      if (player.getPlayerState() === 1) {
        setTimeout(() => {
          player.pauseVideo();
        }, 350)
      } else {
        setTimeout(() => {
          player.playVideo();
        }, 350)
      }
    }
  }

  return (
    <>
      <div className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal}`} data-testid="wrapper">
        <div id="player"></div>
        <button onClick={() => { setTheaterMode((prevState) => !prevState) }} className={styles.toggle}>Toggle theater mode</button>
        <div className={`${styles.overlay} ${playerState === 1 ? styles.overlayPlaying : ''} ${playerState === 2 ? styles.overlayPaused : ''} ${playerState === 0 ? styles.overlayEnd : ''}`} onClick={playOrPauseVideo}>

        </div>

        {/* <div className={styles.overlay} ></div> */}
        <div className={playerState === 2 ? styles.blockerActive : styles.blockerInactive}></div>
      </div>

      <button onClick={playVideoWithDelay}>Play</button>
      <button onClick={pauseVideoWithDelay}>Pause</button>
    </>
  )
}

export default YouTubePlayer
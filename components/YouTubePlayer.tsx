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
  }

  // Adjust the component state to reflect the player state when the user plays/pauses/ends
  function onPlayerStateChange(event: YT.OnStateChangeEvent) {
    setPlayerState(event.data);
  }

  const { player } = useYoutubeIframe(videoId, onPlayerReady, onPlayerStateChange);

  const playVideo = () => {
    if (player) {
      setTimeout(() => {
        player.playVideo();
      }, 350)
    }
  };

  const pauseVideo = () => {
    if (player) {
      setTimeout(() => {
        player.pauseVideo();
      }, 350)
    }
  };

  return (
    <>
      <div className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal}`} data-testid="wrapper">
        <div id="player" ></div>
        <button onClick={() => { setTheaterMode((prevState) => !prevState) }} className={styles.toggle}>Toggle theater mode</button>
        <div className={`${styles.overlay} ${playerState === 1 ? styles.overlayPlaying : ''} ${playerState === 2 ? styles.overlayPaused : ''} ${playerState === 0 ? styles.overlayEnd : ''}`}></div>
      </div>

      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </>
  )
}

export default YouTubePlayer
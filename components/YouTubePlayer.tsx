import { useYoutubeIframe } from 'hooks/useYouTubeIframe';
import { useEffect, useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';

interface YouTubePlayerProps {
  videoId: string;
}

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = ({ videoId }: YouTubePlayerProps) => {
  const [theaterMode, setTheaterMode] = useState(false);

  function onPlayerReady(event: YT.PlayerEvent) {
    console.log('Player is ready');
  }

  function onPlayerStateChange(event: YT.OnStateChangeEvent) {
    console.log(event.data);
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
        <div className={styles.overlay}></div>
      </div>

      <button onClick={playVideo}>Play</button>
      <button onClick={pauseVideo}>Pause</button>
    </>
  )
}

export default YouTubePlayer
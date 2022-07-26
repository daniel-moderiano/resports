import { useEffect, useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css';

interface YouTubePlayerProps {
  playerReady: boolean;
}

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = ({ playerReady }: YouTubePlayerProps) => {

  const [theaterMode, setTheaterMode] = useState(false);

  return (
    <div className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal}`} data-testid="wrapper">
      <div id="player" ></div>
      <div className={playerReady ? styles.bottom : ''}>

      </div>
      <button onClick={() => { setTheaterMode((prevState) => !prevState) }} className={styles.toggle}>Toggle theater mode</button>
    </div>
  )
}

export default YouTubePlayer
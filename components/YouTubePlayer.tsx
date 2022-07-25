import { useState } from 'react'
import styles from '../styles/componentStyles/YouTubePlayer.module.css'

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = () => {

  const [theaterMode, setTheaterMode] = useState(false);

  return (
    <div className={`${styles.wrapper} ${theaterMode ? styles.wrapperTheater : styles.wrapperNormal}`} data-testid="wrapper">
      <div id="player"></div>
      <button onClick={() => { setTheaterMode((prevState) => !prevState) }} className={styles.toggle}>Toggle theater mode</button>
    </div>
  )
}

export default YouTubePlayer
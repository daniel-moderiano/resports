import styles from '../styles/componentStyles/YouTubePlayer.module.css'

// The useYouTubeIframe hook will add the YouTube iframe to this div with id="player"
const YouTubePlayer = () => {
  return (
    <div className={styles.wrapper}>
      <div id="player"></div>
    </div>
  )
}

export default YouTubePlayer
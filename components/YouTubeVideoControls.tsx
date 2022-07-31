import { Dispatch, SetStateAction } from 'react';
import styles from '../styles/componentStyles/YouTubeVideoControls.module.css';

interface YouTubeVideoControlsProps {
  player: YT.Player;
  userActive: boolean;
  setUserActive: Dispatch<SetStateAction<boolean>>;
  setPlayerState: Dispatch<SetStateAction<number>>;
  inactivityTimer: React.MutableRefObject<NodeJS.Timeout | null>;
  toggleFullscreen: () => void;
  toggleTheater: () => void;
  playerState: number;
}

const YouTubeVideoControls = ({
  player,
  userActive,
  setUserActive,
  setPlayerState,
  inactivityTimer,
  toggleFullscreen,
  toggleTheater,
  playerState
}: YouTubeVideoControlsProps) => {
  const playVideoWithDelay = () => {
    if (player) {
      player.playVideo();

      setTimeout(() => {
        setPlayerState(1);
      }, 100);

      // A longer timeout is used here because it can be quite anti-user experience to have controls and cursor fade almost immediately after pressing play. 
      setTimeout(() => {
        setUserActive(false);    // ensure video controls fade   
      }, 1000)
    }
  };

  const pauseVideoWithDelay = () => {
    if (player) {
      setPlayerState(2);
      setTimeout(() => {
        player.pauseVideo();
      }, 350)
    }
  };

  return (
    <div>
      {/* <div>
        <button className="centralBtn">
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" /></g></svg>
        </button>
        <button className="centralBtn">
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z" /></g></g></svg>
        </button>
      </div> */}
      <div className={styles.controlsContainer}>
        {/* Play btn */}
        {playerState === 2 ? (
          <button className={styles.controlsBtn} onClick={playVideoWithDelay}>
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M8 5v14l11-7z" /></svg>
          </button>
        ) : (
          <button className={styles.controlsBtn} onClick={pauseVideoWithDelay}>
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          </button>
        )}


        {/* Pause btn */}


        {/* Volume btn */}
        <button className={styles.controlsBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" /></svg>
        </button>

        {/* Mute btn */}
        <button className={styles.controlsBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="27px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" /></svg>
        </button>

        {/* Back 10 btn */}
        <button className={styles.controlsBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><g><path d="M11.99,5V1l-5,5l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6h-2c0,4.42,3.58,8,8,8s8-3.58,8-8S16.41,5,11.99,5z" /><g><path d="M10.89,16h-0.85v-3.26l-1.01,0.31v-0.69l1.77-0.63h0.09V16z" /><path d="M15.17,14.24c0,0.32-0.03,0.6-0.1,0.82s-0.17,0.42-0.29,0.57s-0.28,0.26-0.45,0.33s-0.37,0.1-0.59,0.1 s-0.41-0.03-0.59-0.1s-0.33-0.18-0.46-0.33s-0.23-0.34-0.3-0.57s-0.11-0.5-0.11-0.82V13.5c0-0.32,0.03-0.6,0.1-0.82 s0.17-0.42,0.29-0.57s0.28-0.26,0.45-0.33s0.37-0.1,0.59-0.1s0.41,0.03,0.59,0.1c0.18,0.07,0.33,0.18,0.46,0.33 s0.23,0.34,0.3,0.57s0.11,0.5,0.11,0.82V14.24z M14.32,13.38c0-0.19-0.01-0.35-0.04-0.48s-0.07-0.23-0.12-0.31 s-0.11-0.14-0.19-0.17s-0.16-0.05-0.25-0.05s-0.18,0.02-0.25,0.05s-0.14,0.09-0.19,0.17s-0.09,0.18-0.12,0.31 s-0.04,0.29-0.04,0.48v0.97c0,0.19,0.01,0.35,0.04,0.48s0.07,0.24,0.12,0.32s0.11,0.14,0.19,0.17s0.16,0.05,0.25,0.05 s0.18-0.02,0.25-0.05s0.14-0.09,0.19-0.17s0.09-0.19,0.11-0.32s0.04-0.29,0.04-0.48V13.38z" /></g></g></g></svg>
        </button>

        {/* Rewind btn */}
        <button className={styles.controlsBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" /></svg>
        </button>

        {/* Fast forward btn */}
        <button className={styles.controlsBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /></svg>
        </button>

        {/* Forward 10 btn */}
        <button className={styles.controlsBtn}>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><g><path d="M18,13c0,3.31-2.69,6-6,6s-6-2.69-6-6s2.69-6,6-6v4l5-5l-5-5v4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8H18z" /><polygon points="10.86,15.94 10.86,11.67 10.77,11.67 9,12.3 9,12.99 10.01,12.68 10.01,15.94" /><path d="M12.25,13.44v0.74c0,1.9,1.31,1.82,1.44,1.82c0.14,0,1.44,0.09,1.44-1.82v-0.74c0-1.9-1.31-1.82-1.44-1.82 C13.55,11.62,12.25,11.53,12.25,13.44z M14.29,13.32v0.97c0,0.77-0.21,1.03-0.59,1.03c-0.38,0-0.6-0.26-0.6-1.03v-0.97 c0-0.75,0.22-1.01,0.59-1.01C14.07,12.3,14.29,12.57,14.29,13.32z" /></g></g></svg>
        </button>

        {/* Theater btn */}
        <button className={`${styles.controlsBtn} ${styles.theaterBtn}`} onClick={toggleTheater}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.7 90.93" width="24px"><rect x="3.5" y="3.5" width="131.7" height="83.93" fill="none" stroke="#FFFFFF" strokeWidth="22px" /></svg>
        </button>

        {/* Fullscreen button (changes depending on enter/exit fullscreen) */}
        <button className={styles.controlsBtn} onClick={toggleFullscreen}>
          {document.fullscreenElement ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" /></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" /></svg>
          )}
        </button>

      </div>

    </div>
  )
}

export default YouTubeVideoControls
import { formatElapsedTime } from '../helpers/videoDurationConversion';
import { useEffect, useState } from 'react';
import styles from '../styles/componentStyles/YouTubeVideoControls.module.css';
import MutedIcon from './icons/MutedIcon';
import VolumeIcon from './icons/VolumeIcon';

interface YouTubeVideoControlsProps {
  player: YT.Player;
  playerState: number;
  toggleFullscreen: () => void;
  toggleTheater: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  playerMuted: boolean;
}

const YouTubeVideoControls = ({
  player,
  toggleFullscreen,
  toggleTheater,
  playerState,
  togglePlay,
  toggleMute,
  playerMuted
}: YouTubeVideoControlsProps) => {
  // A constantly updated duration state to provide a video duration elapsed to the UI
  const [elapsedDuration, setElapsedDuration] = useState('');

  useEffect(() => {
    // Call this immediately first, to avoid an initial 1 second delay before appearing in UI
    const elapsedTime = player.getCurrentTime();
    setElapsedDuration(formatElapsedTime(elapsedTime));

    setInterval(() => {
      const elapsedTime = player.getCurrentTime();
      setElapsedDuration(formatElapsedTime(elapsedTime));
    }, 1000)
  }, [player])

  const skipForward = (timeToSkipInSeconds: number) => {
    const currentTime = player.getCurrentTime();
    player.seekTo(currentTime + timeToSkipInSeconds, true);
  };

  const skipBackward = (timeToSkipInSeconds: number) => {
    const currentTime = player.getCurrentTime();
    player.seekTo(currentTime - timeToSkipInSeconds, true);
  };

  // Use this function in any position where the user's focus should return to the video
  const releaseFocus = () => {
    const wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    if (wrapper) { wrapper.focus() }
  }


  return (
    <div className={styles.controlsContainer}>
      {/* <div>
        <button className="centralBtn">
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M9.5,16.5v-9l7,4.5L9.5,16.5z" /></g></svg>
        </button>
        <button className="centralBtn">
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M11,16H9V8h2V16z M15,16h-2V8h2V16z" /></g></g></svg>
        </button>
      </div> */}


      <div className={styles.leftControls}>
        {/* Play/pause button */}
        <button className={styles.controlsBtn} onClick={togglePlay} id="playBtn">
          {playerState === 2 ? (
            // Play icon
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M8 5v14l11-7z" /></svg>
          ) : (
            // Pause icon
            <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none" /><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
          )}
        </button>

        {/* Volume btn */}
        <button className={styles.controlsBtn} onClick={() => { toggleMute(); releaseFocus(); }}>
          {playerMuted ? (
            <MutedIcon iconStyles={styles.volumeIcons} fill="#FFFFFF" />
          ) : (
            <VolumeIcon iconStyles={styles.volumeIcons} fill="none" />
          )}
        </button>

        {/* Back 10 btn */}
        <button className={styles.controlsBtn} onClick={() => { skipBackward(600); releaseFocus(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><g><path d="M11.99,5V1l-5,5l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6h-2c0,4.42,3.58,8,8,8s8-3.58,8-8S16.41,5,11.99,5z" /><g><path d="M10.89,16h-0.85v-3.26l-1.01,0.31v-0.69l1.77-0.63h0.09V16z" /><path d="M15.17,14.24c0,0.32-0.03,0.6-0.1,0.82s-0.17,0.42-0.29,0.57s-0.28,0.26-0.45,0.33s-0.37,0.1-0.59,0.1 s-0.41-0.03-0.59-0.1s-0.33-0.18-0.46-0.33s-0.23-0.34-0.3-0.57s-0.11-0.5-0.11-0.82V13.5c0-0.32,0.03-0.6,0.1-0.82 s0.17-0.42,0.29-0.57s0.28-0.26,0.45-0.33s0.37-0.1,0.59-0.1s0.41,0.03,0.59,0.1c0.18,0.07,0.33,0.18,0.46,0.33 s0.23,0.34,0.3,0.57s0.11,0.5,0.11,0.82V14.24z M14.32,13.38c0-0.19-0.01-0.35-0.04-0.48s-0.07-0.23-0.12-0.31 s-0.11-0.14-0.19-0.17s-0.16-0.05-0.25-0.05s-0.18,0.02-0.25,0.05s-0.14,0.09-0.19,0.17s-0.09,0.18-0.12,0.31 s-0.04,0.29-0.04,0.48v0.97c0,0.19,0.01,0.35,0.04,0.48s0.07,0.24,0.12,0.32s0.11,0.14,0.19,0.17s0.16,0.05,0.25,0.05 s0.18-0.02,0.25-0.05s0.14-0.09,0.19-0.17s0.09-0.19,0.11-0.32s0.04-0.29,0.04-0.48V13.38z" /></g></g></g></svg>
        </button>

        {/* Back 5 button */}
        <button className={styles.controlsBtn} onClick={() => { skipBackward(300); releaseFocus(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" width="30px" fill='#FFFFFF'>
            <path d="M12,16C12,16,12,16,12,16c-0.1,0-0.2,0-0.2,0c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.1,0-0.1,0.1-0.1c0.2,0,0.5,0,0.7,0c0.1,0,0.1,0,0.1,0.1c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.1,0.4,0.1c0.2,0,0.4-0.1,0.5-0.3c0.1-0.3,0.1-0.5,0-0.8c0-0.2-0.1-0.3-0.3-0.3c-0.2-0.1-0.6-0.1-0.8,0.1c0,0-0.1,0-0.1,0c-0.2,0-0.4-0.1-0.6-0.1c-0.1,0-0.1,0-0.1-0.1c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.3,0.1-0.5c0-0.2,0-0.4,0.1-0.6c0-0.1,0-0.3,0-0.4c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.7,0,1.4,0,2.1,0c0.1,0,0.1,0,0.1,0.1c0,0.2,0,0.4,0,0.5c0,0.1,0,0.1-0.1,0.1c-0.5,0-1,0-1.5,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4-0.1,0.6c0,0,0,0,0,0c0,0,0,0,0,0c0.3-0.1,0.7-0.2,1-0.1c0.4,0.1,0.7,0.4,0.8,0.8c0.1,0.2,0.1,0.4,0.1,0.6c0,0.2,0,0.4-0.1,0.6c-0.2,0.4-0.6,0.7-1,0.7C12.2,16,12.1,16,12,16z" />
            <path d="M12,5V1L7,6l5,5V7c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6H4c0,4.4,3.6,8,8,8s8-3.6,8-8S16.4,5,12,5z" />
          </svg>
        </button>

        {/* Back 1 min btn */}
        <button className={styles.controlsBtn} onClick={() => { skipBackward(60); releaseFocus(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" width="30px" fill="#FFFFFF">
            <path d="M12,5V1L7,6l5,5V7c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6H4c0,4.4,3.6,8,8,8s8-3.6,8-8S16.4,5,12,5z" />
            <path d="M12.4,16h-0.9v-3.3l-1,0.3v-0.7l1.8-0.6h0.1C12.4,11.7,12.4,16,12.4,16z" />
          </svg>
        </button>


        {/* Consider abstracting to it's own component to avoid re-rendering entire control bar */}
        {/* These duration styles resize to ensure the text is always centered without constantly shifting adjacent divs */}
        <span className={`${styles.duration} ${(elapsedDuration.length > 4 && elapsedDuration.length <= 5) ? styles.durationMedium : ''} ${elapsedDuration.length > 5 ? styles.durationLarge : ''}`}>
          {elapsedDuration}
        </span>


        {/* Forward 1 min btn */}
        <button className={styles.controlsBtn} onClick={() => { skipForward(60); releaseFocus(); }}>
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enableBackground="new 0 0 24 24" width="30px" fill="#FFFFFF">
            <path d="M18,13c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6v4l5-5l-5-5v4c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8H18z" />
            <polygon points="12.6,16.1 12.6,11.8 12.5,11.8 10.8,12.4 10.8,13.1 11.8,12.8 11.8,16.1 " />
          </svg>
        </button>

        {/* Forward 5 btn */}
        <button className={styles.controlsBtn} onClick={() => { skipForward(300); releaseFocus(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="30px" fill="#FFFFFF" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
            <path d="M12,16.1C12,16.1,12,16.1,12,16.1c-0.1,0-0.2,0-0.2,0c-0.3,0-0.6-0.1-0.8-0.4c-0.2-0.2-0.4-0.5-0.4-0.8c0-0.1,0-0.1,0.1-0.1c0.2,0,0.5,0,0.7,0c0.1,0,0.1,0,0.1,0.1c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.2,0.1,0.4,0.1 c0.2,0,0.4-0.1,0.5-0.3c0.1-0.3,0.1-0.5,0-0.8c0-0.2-0.1-0.3-0.3-0.3c-0.2-0.1-0.6-0.1-0.8,0.1c0,0-0.1,0-0.1,0c-0.2,0-0.4-0.1-0.6-0.1c-0.1,0-0.1,0-0.1-0.1c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.3,0.1-0.5c0-0.2,0-0.4,0.1-0.6c0-0.1,0-0.3,0-0.4c0,0,0,0,0.1,0c0,0,0.1,0,0.1,0c0.7,0,1.4,0,2.1,0c0.1,0,0.1,0,0.1,0.1c0,0.2,0,0.4,0,0.5c0,0.1,0,0.1-0.1,0.1c-0.5,0-1,0-1.5,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4-0.1,0.6c0,0,0,0,0,0c0,0,0,0,0,0c0.3-0.1,0.7-0.2,1-0.1c0.4,0.1,0.7,0.4,0.8,0.8c0.1,0.2,0.1,0.4,0.1,0.6c0,0.2,0,0.4-0.1,0.6c-0.2,0.4-0.6,0.7-1,0.7C12.2,16.1,12.1,16.1,12,16.1z" />
            <path d="M18,13c0,3.3-2.7,6-6,6s-6-2.7-6-6s2.7-6,6-6v4l5-5l-5-5v4c-4.4,0-8,3.6-8,8s3.6,8,8,8s8-3.6,8-8H18z" />
          </svg>
        </button>

        {/* Forward 10 btn */}
        <button className={styles.controlsBtn} onClick={() => { skipForward(600); releaseFocus(); }}>
          <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width="30px" fill="#FFFFFF"><g><rect fill="none" height="32" width="32" /></g><g><g><path d="M18,13c0,3.31-2.69,6-6,6s-6-2.69-6-6s2.69-6,6-6v4l5-5l-5-5v4c-4.42,0-8,3.58-8,8c0,4.42,3.58,8,8,8s8-3.58,8-8H18z" /><polygon points="10.86,15.94 10.86,11.67 10.77,11.67 9,12.3 9,12.99 10.01,12.68 10.01,15.94" /><path d="M12.25,13.44v0.74c0,1.9,1.31,1.82,1.44,1.82c0.14,0,1.44,0.09,1.44-1.82v-0.74c0-1.9-1.31-1.82-1.44-1.82 C13.55,11.62,12.25,11.53,12.25,13.44z M14.29,13.32v0.97c0,0.77-0.21,1.03-0.59,1.03c-0.38,0-0.6-0.26-0.6-1.03v-0.97 c0-0.75,0.22-1.01,0.59-1.01C14.07,12.3,14.29,12.57,14.29,13.32z" /></g></g></svg>
        </button>
      </div>


      <div className={styles.rightControls}>
        {/* Theater btn */}
        <button className={styles.controlsBtn} onClick={toggleTheater} data-testid="theater">
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
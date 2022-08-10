import { formatElapsedTime } from '../helpers/videoDurationConversion';
import { useEffect, useState } from 'react';
import styles from '../styles/componentStyles/YouTubeVideoControls.module.css';
import MutedIcon from './icons/MutedIcon';
import VolumeIcon from './icons/VolumeIcon';
import BackTenIcon from './icons/BackTenIcon';
import BackFiveIcon from './icons/BackFiveIcon';
import BackOneIcon from './icons/BackOneIcon';
import ForwardOneIcon from './icons/ForwardOneIcon';
import ForwardFiveIcon from './icons/ForwardFiveIcon';
import ForwardTenIcon from './icons/ForwardTenIcon';
import ExitFullscreenIcon from './icons/ExitFullscreenIcon';
import EnterFullscreenIcon from './icons/EnterFullscreenIcon';
import TheaterIcon from './icons/TheaterIcon';
import PlayIcon from './icons/PlayIcon';
import PauseIcon from './icons/PauseIcon';

interface YouTubeVideoControlsProps {
  player: YT.Player;
  playerState: number;
  toggleFullscreen: () => void;
  toggleTheater: () => void;
  togglePlay: () => void;
  toggleMute: () => void;
  skipForward: (timeToSkipInSeconds: number) => void
  skipBackward: (timeToSkipInSeconds: number) => void
  playerMuted: boolean;
}

const YouTubeVideoControls = ({
  player,
  toggleFullscreen,
  toggleTheater,
  playerState,
  togglePlay,
  toggleMute,
  skipBackward,
  skipForward,
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

  // Use this function in any position where the user's focus should return to the video
  const releaseFocus = () => {
    const wrapper: HTMLDivElement | null = document.querySelector("#wrapper");
    if (wrapper) { wrapper.focus() }
  }

  return (
    <div className={styles.controlsContainer}>
      <div className={styles.leftControls}>
        <button className={styles.controlsBtn} onClick={togglePlay} id="playBtn" aria-label={playerState === 1 ? 'Pause video' : 'Play video'}>
          {playerState === 1 ? (
            <PauseIcon iconStyles={styles.icons32} fill="#FFFFFF" />
          ) : (
            <PlayIcon iconStyles={styles.icons32} fill="#FFFFFF" />
          )}
        </button>

        <button className={styles.controlsBtn} onClick={() => { toggleMute(); releaseFocus(); }}>
          {playerMuted ? (
            <MutedIcon iconStyles={styles.icons27} fill="#FFFFFF" />
          ) : (
            <VolumeIcon iconStyles={styles.icons27} fill="none" />
          )}
        </button>

        <button className={styles.controlsBtn} onClick={() => { skipBackward(600); releaseFocus(); }}>
          <BackTenIcon iconStyles={styles.icons30} fill="#FFFFFF" />
        </button>

        <button className={styles.controlsBtn} onClick={() => { skipBackward(300); releaseFocus(); }}>
          <BackFiveIcon iconStyles={styles.icons30} fill="#FFFFFF" />
        </button>

        <button className={styles.controlsBtn} onClick={() => { skipBackward(60); releaseFocus(); }}>
          <BackOneIcon iconStyles={styles.icons30} fill="#FFFFFF" />
        </button>

        {/* These duration styles resize to ensure the text is always centered without constantly shifting adjacent divs */}
        <span className={`${styles.duration} ${(elapsedDuration.length > 4 && elapsedDuration.length <= 5) ? styles.durationMedium : ''} ${elapsedDuration.length > 5 ? styles.durationLarge : ''}`}>
          {elapsedDuration}
        </span>

        <button className={styles.controlsBtn} onClick={() => { skipForward(60); releaseFocus(); }}>
          <ForwardOneIcon iconStyles={styles.icons30} fill="#FFFFFF" />
        </button>

        <button className={styles.controlsBtn} onClick={() => { skipForward(300); releaseFocus(); }}>
          <ForwardFiveIcon iconStyles={styles.icons30} fill="#FFFFFF" />
        </button>

        <button className={styles.controlsBtn} onClick={() => { skipForward(600); releaseFocus(); }}>
          <ForwardTenIcon iconStyles={styles.icons30} fill="#FFFFFF" />
        </button>
      </div>

      <div className={styles.rightControls}>
        <button className={styles.controlsBtn} onClick={toggleTheater} data-testid="theater">
          <TheaterIcon iconStyles={styles.icons24} fill="#FFFFFF" />
        </button>

        <button className={styles.controlsBtn} onClick={toggleFullscreen}>
          {document.fullscreenElement ? (
            <ExitFullscreenIcon iconStyles={styles.icons30} fill="#FFFFFF" />
          ) : (
            <EnterFullscreenIcon iconStyles={styles.icons30} fill="#FFFFFF" />
          )}
        </button>
      </div>
    </div>
  )
}

export default YouTubeVideoControls
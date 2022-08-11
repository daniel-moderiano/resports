import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import YouTubeVideoControls from '../../components/YouTubeVideoControls';

// Named mocks to test player functions being called
const playerMock = {
  getCurrentTime: jest.fn,
  isMuted: () => false,
  getVolume: jest.fn,
};

let playerStateMock = -1;
const toggleFullscreenMock = jest.fn();
const toggleTheaterMock = jest.fn();
const togglePlayMock = jest.fn();
const toggleMuteMock = jest.fn();
const skipForwardMock = jest.fn();
const skipBackwardMock = jest.fn();
let playerMutedMock = true;


// The max test timeout should be increase to deal with waiting for timeout intervals in certain tests
jest.setTimeout(10000)

describe('YouTube video control icons and labels', () => {
  const setup = () => {
    render(<YouTubeVideoControls
      // @ts-expect-error a complete Player object is not required for these tests
      player={playerMock}
      playerState={playerStateMock}
      playerMuted={playerMutedMock}
      toggleFullscreen={toggleFullscreenMock}
      togglePlay={togglePlayMock}
      toggleTheater={toggleTheaterMock}
      skipForward={skipForwardMock}
      skipBackward={skipBackwardMock}
      toggleMute={toggleMuteMock}
    />)
  };

  it('Shows correct play icon and aria-label when video is unstarted', () => {
    setup();
    const playBtn = screen.getByRole('button', { name: 'Play video' });
    const playIcon = screen.getByTestId(/playIcon/i)
    expect(playBtn).toBeInTheDocument();
    expect(playIcon).toBeInTheDocument();
  });

  it('Shows correct pause icon and aria-label when video is playing', () => {
    playerStateMock = 1;
    setup();
    const pauseBtn = screen.getByRole('button', { name: 'Pause video' });
    const pauseIcon = screen.getByTestId(/pauseIcon/i)
    expect(pauseBtn).toBeInTheDocument();
    expect(pauseIcon).toBeInTheDocument();
  });

  it('Shows correct play icon and aria-label when video is paused', () => {
    playerStateMock = 2;
    setup();
    const playBtn = screen.getByRole('button', { name: 'Play video' });
    const playIcon = screen.getByTestId(/playIcon/i)
    expect(playBtn).toBeInTheDocument();
    expect(playIcon).toBeInTheDocument();
  });

  it('Shows correct volume icon and aria-label (mute video) when video is unmuted', () => {
    playerMutedMock = false;    // unmute the videos
    setup();
    const muteBtn = screen.getByRole('button', { name: 'Mute video' });
    const volumeIcon = screen.getByTestId(/volumeIcon/i)
    expect(muteBtn).toBeInTheDocument();
    expect(volumeIcon).toBeInTheDocument();
  });

  it('Shows correct muted icon and aria-label (unmute video) when video is muted', () => {
    playerMutedMock = true;    // unmute the videos
    setup();
    const unMuteBtn = screen.getByRole('button', { name: 'Unmute video' });
    const mutedIcon = screen.getByTestId(/mutedIcon/i)
    expect(unMuteBtn).toBeInTheDocument();
    expect(mutedIcon).toBeInTheDocument();
  });

  it('Shows correct enter fullscreen icon and aria-label on initial load', () => {
    setup();
    const enterFullscreenBtn = screen.getByRole('button', { name: 'Enter fullscreen' });
    const enterFullscreenIcon = screen.getByTestId(/enterFullscreenIcon/i)
    expect(enterFullscreenBtn).toBeInTheDocument();
    expect(enterFullscreenIcon).toBeInTheDocument();
  });

  // It is impossible to mock entering fullscreen to test the toggle to exit fullscreen label/icon. Hence only entering is tested here.
});



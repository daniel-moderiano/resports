import { act, render, screen } from '@testing-library/react'
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
const playerMutedMock = true;


// The max test timeout should be increase to deal with waiting for timeout intervals in certain tests
jest.setTimeout(10000)

describe('YouTube player styling and modes', () => {
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

  it('Shows play icon when video is unstarted (default)', () => {
    setup();
    const playBtn = screen.getByRole('button', { name: 'Play video' });
    expect(playBtn).toBeInTheDocument();
  });

  it('Shows pause icon when video is playing', () => {
    playerStateMock = 1;
    setup();
    const playBtn = screen.getByRole('button', { name: 'Pause video' });
    expect(playBtn).toBeInTheDocument();
  });

  it('Shows play icon when video is paused', () => {
    playerStateMock = 2;
    setup();
    const playBtn = screen.getByRole('button', { name: 'Play video' });
    expect(playBtn).toBeInTheDocument();
  });
});



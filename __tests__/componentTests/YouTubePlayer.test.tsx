import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import YouTubePlayer from '../../components/YouTubePlayer';

// Named mocks to test player functions being called
const muteMock = jest.mock;
const unMuteMock = jest.fn;


// Provide channel data and other UI states via this mock of the channel search API call
jest.mock('../../hooks/useYouTubeIframe', () => ({
  // Make sure a player object is returned here to trigger the functions requiring a truthy player object
  useYouTubeIframe: () => ({
    player: {
      getCurrentTime: () => 0,
      isMuted: jest.fn,
      mute: muteMock,
      unMute: unMuteMock,
    }
  })
}));

// The max test timeout should be increase to deal with waiting for timeout intervals in certain tests
jest.setTimeout(10000)

describe('YouTube player styling and modes', () => {
  it('Begins in normal (non-theater) mode', () => {
    render(<YouTubePlayer videoId='1234' />)
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveClass('wrapperNormal');
    expect(wrapper).not.toHaveClass('wrapperTheater');
  });

  it('Switches to theater mode on "t" key press', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const wrapper = screen.getByTestId('wrapper');

    await userEvent.keyboard('[KeyT]');

    expect(wrapper).toHaveClass('wrapperTheater');
    expect(wrapper).not.toHaveClass('wrapperNormal');
  });

  it('Switches to normal mode on "t" subsequent key press', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const wrapper = screen.getByTestId('wrapper');

    await userEvent.keyboard('[KeyT]');
    await userEvent.keyboard('[KeyT]');

    expect(wrapper).toHaveClass('wrapperNormal');
    expect(wrapper).not.toHaveClass('wrapperTheater');
  });

  // * Testing fullscreen functionality is not only impossible without a valid iframe (with 'allowFullscreen'), but potentially redundant as it is an inbuilt browser API function
});

describe('YouTube player control toggles', () => {
  it('Initialises video without custom controls', () => {
    render(<YouTubePlayer videoId='1234' />)
    const customControls = screen.queryByTestId('customControls');
    expect(customControls).not.toBeInTheDocument();
  });

  it('Initialises video without YT controls blocker in place', () => {
    render(<YouTubePlayer videoId='1234' />)
    const controlsBlocker = screen.getByTestId('controlsBlocker');
    expect(controlsBlocker).toBeInTheDocument();
  });

  it('Hides controls gradient and video overlay by default', () => {
    render(<YouTubePlayer videoId='1234' />)
    const gradient = screen.queryByTestId('gradient');
    const overlay = screen.queryByTestId('overlay');
    expect(gradient).not.toBeInTheDocument();
    expect(overlay).not.toBeInTheDocument();
  });

  it('Hides YT controls (and show custom controls) on respective button press', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const hideYTBtn = screen.getByRole('button', { name: /hide YT controls/i });

    // This should hide the YT controls blocker
    await userEvent.click(hideYTBtn);

    const controlsBlocker = screen.queryByTestId('controlsBlocker');
    const customControls = screen.getByTestId('customControls');
    expect(controlsBlocker).not.toBeInTheDocument();
    expect(customControls).toBeInTheDocument();
  });

  it('Toggles between custom vs YT controls on respective button press', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const hideYTBtn = screen.getByRole('button', { name: /hide YT controls/i });
    const showYTBtn = screen.getByRole('button', { name: /show YT controls/i });

    // This should hide and then show the YT controls blocker
    await userEvent.click(hideYTBtn);
    await userEvent.click(showYTBtn);

    const controlsBlocker = screen.getByTestId('controlsBlocker');
    const customControls = screen.queryByTestId('customControls');
    expect(controlsBlocker).toBeInTheDocument();
    expect(customControls).not.toBeInTheDocument();
  });

  it('Renders custom controls hidden when hiding YT controls', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const hideYTBtn = screen.getByRole('button', { name: /hide YT controls/i });

    // This should enable custom controls
    await userEvent.click(hideYTBtn);

    const customControls = screen.getByTestId('customControls');
    expect(customControls).toHaveClass('controlsHide');
    expect(customControls).toBeInTheDocument();
  });

  it('Visually display custom controls on mute/unmute with keypress', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const hideYTBtn = screen.getByRole('button', { name: /hide YT controls/i });

    // First enable custom controls, then hover the relevant div to trigger user activity/controls to show
    await userEvent.click(hideYTBtn);
    const overlay = screen.getByTestId('overlay');
    await userEvent.hover(overlay);

    const customControls = screen.getByTestId('customControls');
    expect(customControls).not.toHaveClass('controlsHide');
  });
});

describe('YouTube player keyboard shortcuts', () => {
  it('Mutes the video on "m" key press, when in an unmuted state', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const hideYTBtn = screen.getByRole('button', { name: /hide YT controls/i });
    const wrapper = screen.getByTestId('wrapper');

    // First enable custom controls, then focus the wrapper to ensure the keypress is captured correctly
    await userEvent.click(hideYTBtn);
    wrapper.focus();
    await userEvent.keyboard('m');

    expect(muteMock).toBeCalled();
  });

  it('Unutes the video on "m" key press, when in a muted state', async () => {
    render(<YouTubePlayer videoId='1234' />)
    const hideYTBtn = screen.getByRole('button', { name: /hide YT controls/i });
    const wrapper = screen.getByTestId('wrapper');

    // First enable custom controls, then focus the wrapper to ensure the keypress is captured correctly
    await userEvent.click(hideYTBtn);
    wrapper.focus();
    await userEvent.keyboard('m');

    const customControls = screen.getByTestId('customControls');
    expect(customControls).not.toHaveClass('controlsHide');
  });
});


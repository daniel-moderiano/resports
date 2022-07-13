import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YouTubeChannelVideos from "@/components/YouTubeChannelVideos";

interface mockYouTubeVideosHook {
  isLoading: boolean,
  isError: boolean,
  data: undefined,
  error: unknown,
}

// Example data set containing only 2 videos (realistically many data sets will have hundreds)
const testVideos = [];

// Modify these parameters as needed within individual tests
const mockResult: mockYouTubeVideosHook = {
  isLoading: false,
  isError: false,
  data: undefined,
  error: null,
}

// This mock will produce whichever custom parameters are specified in the mockSearch object above
jest.mock('../../hooks/useGetYouTubeVideos', () => ({
  useGetYouTubeVideos: () => (mockResult),
}));

describe('Twitch videos loading/error/data UI states', () => {
  it('Hides the videos by default', () => {
    render(<YouTubeChannelVideos channelId='1234' />)

    // Check the reveal button is shown
    const btn = screen.getByRole('button', { name: /reveal videos/i });
    expect(btn).toBeInTheDocument();

    // Ensure the video overlay is shown
    const videos = screen.getByTestId('overlay');
    expect(videos).toBeInTheDocument();
  });

  it('Shows the videos on click of reveal btn', async () => {
    render(<YouTubeChannelVideos channelId='1234' />)

    // First click button
    const btn = screen.getByRole('button', { name: /reveal videos/i });
    await userEvent.click(btn);

    // Ensure the video overlay is shown
    const videos = screen.queryByTestId('overlay');
    expect(videos).not.toBeInTheDocument();
  });


  it('Renders only loading UI while data is loading', () => {
    mockResult.isLoading = true;
    render(<YouTubeChannelVideos channelId='1234' />)

    // Check error UI is not present
    const error = screen.queryByText(/error/i)
    expect(error).not.toBeInTheDocument();

    // Check for loading UI
    const loading = screen.getByText(/loading/i)
    expect(loading).toBeInTheDocument();
  });

  it('Renders only error message when an API error occurs', () => {
    mockResult.isError = true;
    mockResult.isLoading = false;
    render(<YouTubeChannelVideos channelId='1234' />)

    // Check that loading UI is not present
    const loading = screen.queryByText(/loading/i)
    expect(loading).not.toBeInTheDocument();

    // Check for error UI
    const error = screen.getByText(/error/i)
    expect(error).toBeInTheDocument();
  });

  it('Renders data once available (no loaders/error UI present)', () => {
    mockResult.isError = false;
    mockResult.isLoading = false;
    mockResult.data = testVideos;
    render(<YouTubeChannelVideos channelId='1234' />)

    // Check that loading UI is not present
    const loading = screen.queryByText(/loading/i)
    expect(loading).not.toBeInTheDocument();

    // Check that API error UI is not present
    const error = screen.queryByText(/error/i)
    expect(error).not.toBeInTheDocument();

    // Check that data has been rendered
    const videos = screen.getByText(/best gamer ever/i);
    expect(videos).toBeInTheDocument();
  });

  it('Renders custom message for searches that return no results', () => {
    mockResult.isError = false;
    mockResult.isLoading = false;
    // This data does not contain any channel items
    mockResult.data = [];
    render(<YouTubeChannelVideos channelId='1234' />)
    const msg = screen.getByText(/no videos/i)
    expect(msg).toBeInTheDocument();
  });
});

describe('Video type filter', () => {
  it('Defaults the video type select element to "Broadcasts"', () => {
    render(<YouTubeChannelVideos channelId='1234' />)
    const selectElement: HTMLSelectElement = screen.getByLabelText(/video type/i)
    expect(selectElement.value).toBe('archive');
  });

  it('Correctly handles selecting different video type options', async () => {
    render(<YouTubeChannelVideos channelId='1234' />)
    const selectElement: HTMLSelectElement = screen.getByLabelText(/video type/i);
    const allOption: HTMLOptionElement = screen.getByTestId(/allOption/i);
    await userEvent.selectOptions(selectElement, allOption)
    expect(selectElement.value).toBe('all');
  });
});

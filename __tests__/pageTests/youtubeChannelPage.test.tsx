import { render, screen } from '@testing-library/react';
import YouTubeChannel from '../../pages/youtubeChannel/[channelId]';
import { YouTubeChannelSearchResult } from 'types/youtubeAPITypes';

interface mockYouTubeChannelSearchHook {
  isLoading: boolean,
  isError: boolean,
  data: YouTubeChannelSearchResult | undefined,
  error: unknown,
}

// Globally mock the next router and useRouter hook. This mock prevents an reference error when the component attempts to read the router.query object from useRouter
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({ query: { channelId: '1234' } })),
}));


// Reflects the exact type of channel data received from the API
const testData = {
  kind: "youtube#channel",
  etag: "JzVXdSr_8QsaydMEzyytEfeJAEE",
  id: "UC_qVvdPdMIZDEc6zdj06ilA",
  snippet: {
    title: "Smash",
    description: "Hi , I'm Smash. I upload funny .io games. Most of them are funny moments and trolling. Most of the time I upload Agar.io, Slither.io and Wormate.io Funny Moments.\nI hope you guys will like them. Please support with like and subscribe.",
    customUrl: "smashgaminghere",
    publishedAt: "2015-08-26T11:12:55Z",
    thumbnails: {
      default: {
        url: "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s88-c-k-c0x00ffffff-no-rj",
        width: 88,
        height: 88
      },
      medium: {
        url: "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s240-c-k-c0x00ffffff-no-rj",
        width: 240,
        height: 240
      },
      high: {
        url: "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s800-c-k-c0x00ffffff-no-rj",
        width: 800,
        height: 800
      }
    },
    localized: {
      title: "Smash",
      description: "Hi , I'm Smash. I upload funny .io games. Most of them are funny moments and trolling. Most of the time I upload Agar.io, Slither.io and Wormate.io Funny Moments.\nI hope you guys will like them. Please support with like and subscribe."
    },
    country: "US"
  },
  statistics: {
    viewCount: "567795130",
    subscriberCount: "1510000",
    hiddenSubscriberCount: false,
    videoCount: "570"
  },
  brandingSettings: {
    channel: {
      title: "Smash",
      description: "Hi , I'm Smash. I upload funny .io games. Most of them are funny moments and trolling. Most of the time I upload Agar.io, Slither.io and Wormate.io Funny Moments.\nI hope you guys will like them. Please support with like and subscribe.",
      unsubscribedTrailer: "28Yp4ERsiaE",
      country: "US"
    },
    image: {
      bannerExternalUrl: "https://lh3.googleusercontent.com/NXYsqbX3ExtOP8fPJ_ySnaE8vb7ZCYdDdSuOGZYztCu0nVT3cl40VYEwZn56lbJ_CpUouWBlXw"
    }
  },
}

// Modify these parameters as needed within individual tests
const mockChannelSearch: mockYouTubeChannelSearchHook = {
  isLoading: false,
  isError: false,
  data: undefined,
  error: null,
}

// Provide channel data and other UI states via this mock of the channel search API call
jest.mock('../../hooks/useGetYouTubeChannel', () => ({
  useGetYouTubeChannel: () => (mockChannelSearch),
}));


describe('Channel page layout and elements', () => {
  it('Shows the channel title', () => {
    mockChannelSearch.isError = false;
    mockChannelSearch.isLoading = false;
    mockChannelSearch.data = testData;
    render(<YouTubeChannel />)

    const title = screen.getByRole('heading', { name: /Smash/i });
    expect(title).toBeInTheDocument();
  });

  it('Shows the channel data (subscriber count and video count)', () => {
    render(<YouTubeChannel />)

    const subCount = screen.getByText(/1510000 subscribers/i);
    const videoCount = screen.getByText(/570 videos/i);
    expect(subCount).toBeInTheDocument();
    expect(videoCount).toBeInTheDocument();
  });

  it('Shows the channel thumbnail and banner', () => {
    render(<YouTubeChannel />)

    // With channel thumbnail and banner, we should see two images in this component
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });
});

describe('Channel page UI states', () => {
  it('Renders data correctly (no loaders/error UI present)', () => {
    mockChannelSearch.isError = false;
    mockChannelSearch.isLoading = false;
    mockChannelSearch.data = testData;
    render(<YouTubeChannel />)

    // Check that loading UI is not present
    const loading = screen.queryByText(/loading/i)
    expect(loading).not.toBeInTheDocument();

    // Check that API error UI is not present
    const error = screen.queryByText(/error/i)
    expect(error).not.toBeInTheDocument();

    // Check that data has been rendered
    const channelData = screen.getByRole('heading', { name: /Smash/i });
    expect(channelData).toBeInTheDocument();
  });

  it('Renders only loading UI while data is loading', () => {
    mockChannelSearch.isError = false;
    mockChannelSearch.isLoading = true;
    mockChannelSearch.data = undefined;
    render(<YouTubeChannel />)

    // Check error UI is not present
    const error = screen.queryByText(/error/i)
    expect(error).not.toBeInTheDocument();

    // Check for loading UI
    const loading = screen.getByText(/loading/i)
    expect(loading).toBeInTheDocument();
  });

  it('Renders only error message when an API error occurs', () => {
    mockChannelSearch.isError = true;
    mockChannelSearch.isLoading = false;
    mockChannelSearch.data = undefined;
    render(<YouTubeChannel />)

    // Check that loading UI is not present
    const loading = screen.queryByText(/loading/i)
    expect(loading).not.toBeInTheDocument();

    // Check for error UI
    const error = screen.getByText(/error/i)
    expect(error).toBeInTheDocument();
  });
});



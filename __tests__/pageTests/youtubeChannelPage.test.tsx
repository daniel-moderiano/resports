import { render, screen } from '@testing-library/react';
import YouTubeChannel from '../../pages/youtubeChannel/[channelId]';
import { useRouter } from 'next/router';

// Globally mock the next router and useRouter hook. This mock prevents an reference error when the component attempts to read the router.query object from useRouter
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// Use this in individual tests to provide a custom searchQuery for the component/page to handle
const setSearchQuery = (query: Record<string, unknown>) => {
  (useRouter as jest.Mock).mockImplementation(() => ({ query }));
}

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

// Provide channel data and other UI states via this mock of the channel search API call
jest.mock('../../hooks/useGetYouTubeChannel', () => ({
  useGetYouTubeChannel: () => ({
    isLoading: false,
    isError: false,
    data: undefined,
    error: false,
  }),
}));


describe('Channel page', () => {
  it('renders a heading', () => {
    setSearchQuery({ channelId: '1234' })
    render(<YouTubeChannel />)

    const heading = screen.getByRole('heading', {
      name: /channel/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

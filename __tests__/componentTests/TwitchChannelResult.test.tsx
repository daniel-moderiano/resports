import { render, screen } from '@testing-library/react'
import TwitchChannelResult from '../../components/TwitchChannelResult';
import { HelixChannelSearchResult } from '@twurple/api/lib/api/helix/search/HelixChannelSearchResult';

const testData: HelixChannelSearchResult = {
  _client: {},
  // @ts-expect-error exact getUser implementation not needed in these tests
  getUser: jest.fn,
  // @ts-expect-error exact getGame implementation not needed in these tests
  getGame: jest.fn,
  // @ts-expect-error exact getTags implementation not needed in these tests
  getTags: jest.fn,
  displayName: "loserfruit",
  gameId: "509658",
  gameName: "Just Chatting",
  id: "41245072",
  isLive: false,
  language: "en",
  name: "smasherger",
  startDate: null,
  tagIds: [],
  thumbnailUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/fd17325a-7dc2-46c6-8617-e90ec259501c-profile_image-300x300.png"
}

const testDataLive: HelixChannelSearchResult = {
  _client: {},
  // @ts-expect-error exact getUser implementation not needed in these tests
  getUser: jest.fn,
  // @ts-expect-error exact getGame implementation not needed in these tests
  getGame: jest.fn,
  // @ts-expect-error exact getTags implementation not needed in these tests
  getTags: jest.fn,
  displayName: "loserfruit",
  gameId: "509658",
  gameName: "Just Chatting",
  id: "41245072",
  isLive: true,
  language: "en",
  name: "smasherger",
  startDate: null,
  tagIds: [],
  thumbnailUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/fd17325a-7dc2-46c6-8617-e90ec259501c-profile_image-300x300.png"
}

describe('Twitch channel result component', () => {
  it('Includes channel thumbnail', () => {
    render(<TwitchChannelResult channelData={testData} />)
    const thumbnail = screen.getByRole('img');
    expect(thumbnail).toBeInTheDocument();
  });

  it('Includes channel name', () => {
    render(<TwitchChannelResult channelData={testData} />)
    const name = screen.getByText('Loserfruit');
    expect(name).toBeInTheDocument()
  });

  it('Includes LIVE indicator for currently streaming channel', () => {
    render(<TwitchChannelResult channelData={testDataLive} />)
    const live = screen.getByText('LIVE');
    expect(live).toBeInTheDocument()
  });

  it('Does not show LIVE indicator for currently offline channel', () => {
    render(<TwitchChannelResult channelData={testData} />)
    const live = screen.queryByText('LIVE');
    expect(live).not.toBeInTheDocument()
  });

  // Unsure if this is to be included
  it('Includes active subscribe button (if not yet subscribed)', () => {
    render(<TwitchChannelResult channelData={testData} />)
    const subscribe = screen.getByRole('button', { name: /subscribe/i });
    expect(subscribe).toBeInTheDocument()
  });

  it('Includes "unsubscribe" button (if already subscribed)', () => {
    render(<TwitchChannelResult channelData={testData} />)
    const unsubscribe = screen.getByRole('button', { name: /unsubscribe/i });
    expect(unsubscribe).toBeInTheDocument()
  });
})

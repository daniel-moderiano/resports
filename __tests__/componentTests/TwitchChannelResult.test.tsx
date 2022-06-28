import { render, screen } from '@testing-library/react'
import { HelixChannelSearchResultData } from '@twurple/api/lib/api/helix/search/HelixChannelSearchResult';
import TwitchChannelResult from '../../components/TwitchChannelResult';

const testData: HelixChannelSearchResultData = {
  broadcaster_language: "en",
  broadcaster_login: "loserfruit",
  display_name: "Loserfruit",
  game_id: "498000",
  game_name: "House Flipper",
  id: "41245072",
  is_live: false,
  tag_ids: [],
  thumbnail_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/fd17325a-7dc2-46c6-8617-e90ec259501c-profile_image-300x300.png",
  title: "loserfruit",
  started_at: ""
}

const testDataLive: HelixChannelSearchResultData = {
  broadcaster_language: "en",
  broadcaster_login: "loserfruit",
  display_name: "Loserfruit",
  game_id: "498000",
  game_name: "House Flipper",
  id: "41245072",
  is_live: true,
  tag_ids: [],
  thumbnail_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/fd17325a-7dc2-46c6-8617-e90ec259501c-profile_image-300x300.png",
  title: "loserfruit",
  started_at: ""
}

describe('Twitch channel result component', () => {
  it('Includes channel thumbnail', () => {
    render(<TwitchChannelResult channelData={testData} />)
    const thumbnail = screen.getByRole('img');
    expect(thumbnail).toBeInTheDocument()
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
    const live = screen.getByText('LIVE');
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

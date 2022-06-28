import { HelixChannelSearchResultData } from "@twurple/api/lib/api/helix/search/HelixChannelSearchResult";
import Image from "next/image";

// TWITCH Channel
const twitchChannel = {
  "broadcaster_language": "en",
  "broadcaster_login": "loserfruit",
  "display_name": "Loserfruit",
  "game_id": "498000",
  "game_name": "House Flipper",
  "id": "41245072",
  "is_live": false,
  "tags_ids": [],
  "thumbnail_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/fd17325a-7dc2-46c6-8617-e90ec259501c-profile_image-300x300.png",
  "title": "loserfruit",
  "started_at": ""
}

interface TwitchChannelResultProps {
  channelData: HelixChannelSearchResultData;
}

const ChannelResult = ({ channelData }: TwitchChannelResultProps) => {
  return (
    <div>
      <div>
        <Image src={channelData.thumbnail_url} alt={`${channelData.display_name} channel thumbnail`} layout="fill" />
      </div>
      <div>
        <h3>{channelData.display_name}</h3>
        {channelData.is_live && (
          <span>
            LIVE
          </span>
        )}
      </div>
    </div>
  )
}

export default ChannelResult
import Image from "next/image";
import { HelixChannelSearchResult } from "@twurple/api/lib/api/helix/search/HelixChannelSearchResult";

interface TwitchChannelResultProps {
  channelData: HelixChannelSearchResult;
}

const ChannelResult = ({ channelData }: TwitchChannelResultProps) => {
  return (
    <div>
      <div>
        <Image src={channelData.thumbnailUrl} alt={`${channelData.displayName} channel thumbnail`} height={100} width={100} />
      </div>
      <div>
        <h3>{channelData.displayName}</h3>
        {channelData.isLive && (
          <span>
            LIVE
          </span>
        )}
        <div>{channelData.gameName}</div>
      </div>
    </div>
  )
}

export default ChannelResult
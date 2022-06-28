import { YouTubeSearchResultSnippet } from "types/youtubeAPITypes";
import Image from 'next/image'

interface YouTubeChannelResultProps {
  channelData: YouTubeSearchResultSnippet;
}

const YouTubeChannelResult = ({ channelData }: YouTubeChannelResultProps) => {
  return (
    <div>
      <div>
        <Image src={channelData.thumbnails.default?.url} alt={`${channelData.channelTitle} channel thumbnail`} layout="fill" />
      </div>
      <div>
        <h3>{channelData.channelTitle}</h3>
        <p>{channelData.description}</p>
      </div>
    </div>
  )
}

export default YouTubeChannelResult
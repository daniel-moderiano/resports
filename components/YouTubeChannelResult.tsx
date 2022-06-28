import { YouTubeSearchResultSnippet } from "types/youtubeAPITypes"

interface YouTubeChannelResultProps {
  channelData: YouTubeSearchResultSnippet;
}

const YouTubeChannelResult = ({ channelData }: YouTubeChannelResultProps) => {
  return (
    <div>YouTube Channel Result</div>
  )
}

export default YouTubeChannelResult
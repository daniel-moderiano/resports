import { YouTubeSearchResultSnippet } from "types/youtubeAPITypes"

const youtubeChannel = {
  "kind": "youtube#searchResult",
  "etag": "pemsyJ8zaYeHl1xMbMMX8H-jk0g",
  "id": {
    "kind": "youtube#channel",
    "channelId": "UC_qVvdPdMIZDEc6zdj06ilA"
  },
  "snippet": {
    "publishedAt": "2015-08-26T11:12:55Z",
    "channelId": "UC_qVvdPdMIZDEc6zdj06ilA",
    "title": "Smash",
    "description": "Hi , I'm Smash. I upload funny .io games. Most of them are funny moments and trolling. Most of the time I upload Agar.io, Slither.io ...",
    "thumbnails": {
      "default": {
        "url": "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s88-c-k-c0xffffffff-no-rj-mo"
      },
      "medium": {
        "url": "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s240-c-k-c0xffffffff-no-rj-mo"
      },
      "high": {
        "url": "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s800-c-k-c0xffffffff-no-rj-mo"
      }
    },
    "channelTitle": "Smash",
    "liveBroadcastContent": "none",
    "publishTime": "2015-08-26T11:12:55Z"
  }
}

interface YouTubeChannelResultProps {
  channelData: YouTubeSearchResultSnippet;
}

const YouTubeChannelResult = ({ channelData }: YouTubeChannelResultProps) => {
  return (
    <div>YouTube Channel Result</div>
  )
}

export default YouTubeChannelResult
import { useGetYouTubeChannel } from 'hooks/useGetYouTubeChannel';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const exampleChannel = {
  "kind": "youtube#channelListResponse",
  "etag": "ALnoIbjoihq0GBB6grZTst_2-po",
  "pageInfo": {
    "totalResults": 1,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#channel",
      "etag": "JzVXdSr_8QsaydMEzyytEfeJAEE",
      "id": "UC_qVvdPdMIZDEc6zdj06ilA",
      "snippet": {
        "title": "Smash",
        "description": "Hi , I'm Smash. I upload funny .io games. Most of them are funny moments and trolling. Most of the time I upload Agar.io, Slither.io and Wormate.io Funny Moments.\nI hope you guys will like them. Please support with like and subscribe.",
        "customUrl": "smashgaminghere",
        "publishedAt": "2015-08-26T11:12:55Z",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s88-c-k-c0x00ffffff-no-rj",
            "width": 88,
            "height": 88
          },
          "medium": {
            "url": "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s240-c-k-c0x00ffffff-no-rj",
            "width": 240,
            "height": 240
          },
          "high": {
            "url": "https://yt3.ggpht.com/ytc/AKedOLT_seyyy6UoovylO6PfSQ9WYy3WLh9CF_g4KlgZvw=s800-c-k-c0x00ffffff-no-rj",
            "width": 800,
            "height": 800
          }
        },
        "localized": {
          "title": "Smash",
          "description": "Hi , I'm Smash. I upload funny .io games. Most of them are funny moments and trolling. Most of the time I upload Agar.io, Slither.io and Wormate.io Funny Moments.\nI hope you guys will like them. Please support with like and subscribe."
        },
        "country": "US"
      },
      "statistics": {
        "viewCount": "567795130",
        "subscriberCount": "1510000",
        "hiddenSubscriberCount": false,
        "videoCount": "570"
      },
      "brandingSettings": {
        "channel": {
          "title": "Smash",
          "description": "Hi , I'm Smash. I upload funny .io games. Most of them are funny moments and trolling. Most of the time I upload Agar.io, Slither.io and Wormate.io Funny Moments.\nI hope you guys will like them. Please support with like and subscribe.",
          "unsubscribedTrailer": "28Yp4ERsiaE",
          "country": "US"
        },
        "image": {
          "bannerExternalUrl": "https://lh3.googleusercontent.com/NXYsqbX3ExtOP8fPJ_ySnaE8vb7ZCYdDdSuOGZYztCu0nVT3cl40VYEwZn56lbJ_CpUouWBlXw"
        }
      },
    }
  ]
}

const YouTubeChannel = () => {
  const router = useRouter();
  const { channelId } = router.query;

  const { isLoading, isError, data, error } = useGetYouTubeChannel(channelId);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data])

  return (
    <div>
      <h2>YouTubeChannel</h2>
      <p>{channelId}</p>

    </div>
  )
}

export default YouTubeChannel
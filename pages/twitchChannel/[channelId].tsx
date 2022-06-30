import { useRouter } from 'next/router';

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
      "contentDetails": {
        "relatedPlaylists": {
          "likes": "",
          "uploads": "UU_qVvdPdMIZDEc6zdj06ilA"
        }
      },
      "statistics": {
        "viewCount": "567795130",
        "subscriberCount": "1510000",
        "hiddenSubscriberCount": false,
        "videoCount": "570"
      },
      "topicDetails": {
        "topicIds": [
          "/m/03hf_rm",
          "/m/0bzvm2",
          "/m/04q1x3q"
        ],
        "topicCategories": [
          "https://en.wikipedia.org/wiki/Strategy_video_game",
          "https://en.wikipedia.org/wiki/Video_game_culture",
          "https://en.wikipedia.org/wiki/Puzzle_video_game"
        ]
      },
      "status": {
        "privacyStatus": "public",
        "isLinked": true,
        "longUploadsStatus": "longUploadsUnspecified"
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
      "contentOwnerDetails": {}
    }
  ]
}


const TwitchChannel = () => {
  const router = useRouter();
  const { channelId } = router.query;

  return (
    <div>
      <h2>TwitchChannel</h2>
      <p>{channelId}</p>
    </div>
  )
}

export default TwitchChannel
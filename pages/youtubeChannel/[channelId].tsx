import { useGetYouTubeChannel } from '../../hooks/useGetYouTubeChannel';
import Image from 'next/image';
import { sanitiseChannelQuery } from '../../helpers/queryHandling';
import { GetServerSideProps } from 'next';
import {useEffect} from "react";

// * The Search: list method can be used with a 'channelId' filter to yield all videos for a channel!

interface YouTubeChannelProps {
  channelId: string;
}

const codLeagueData = {
  "channelData": {
    "kind": "youtube#channel",
    "etag": "-I0iJkH8yA7EplKwzJQO8GKBENE",
    "id": "UCbLIqv9Puhyp9_ZjVtfOy7w",
    "snippet": {
      "title": "Call of Duty League",
      "description": "The official YouTube channel of the Call of Duty League",
      "customUrl": "codleague",
      "publishedAt": "2012-12-20T21:06:20Z",
      "thumbnails": {
        "default": {
          "url": "https://yt3.ggpht.com/ZIOjlEtmCQvCKb_q4NHJeky4x-GPCibjYhom3DRe--We3rIbpwVkvXYelJHu0TnTqfGlB4mEJw=s88-c-k-c0x00ffffff-no-rj",
          "width": 88,
          "height": 88
        },
        "medium": {
          "url": "https://yt3.ggpht.com/ZIOjlEtmCQvCKb_q4NHJeky4x-GPCibjYhom3DRe--We3rIbpwVkvXYelJHu0TnTqfGlB4mEJw=s240-c-k-c0x00ffffff-no-rj",
          "width": 240,
          "height": 240
        },
        "high": {
          "url": "https://yt3.ggpht.com/ZIOjlEtmCQvCKb_q4NHJeky4x-GPCibjYhom3DRe--We3rIbpwVkvXYelJHu0TnTqfGlB4mEJw=s800-c-k-c0x00ffffff-no-rj",
          "width": 800,
          "height": 800
        }
      },
      "localized": {
        "title": "Call of Duty League",
        "description": "The official YouTube channel of the Call of Duty League"
      },
      "country": "US"
    },
    "statistics": {
      "viewCount": "329688440",
      "subscriberCount": "1600000",
      "hiddenSubscriberCount": false,
      "videoCount": "9431"
    },
    "brandingSettings": {
      "channel": {
        "title": "Call of Duty League",
        "description": "The official YouTube channel of the Call of Duty League",
        "keywords": "\"call of duty\" \"cod league\" codleague \"call of duty league\" esports cdl \"call of duty world league\" cwl \"cod pros\" \"competitive call of duty\" \"pro call of duty\" \"black ops cold war\" \"call of duty cold war\" \"cod esports\"",
        "trackingAnalyticsAccountId": "UA-50249600-135",
        "unsubscribedTrailer": "XpKyxQtr0Vc",
        "country": "US"
      },
      "image": {
        "bannerExternalUrl": "https://yt3.ggpht.com/1Eh4TseBolUAevE0tq-FJMtPJgh2QTT-UwwBSVKaLwSO5UmvA8XiQHw7dHQOenDgmB-E1x4l"
      }
    }
  }
}

// This server side props function ensures the dynamic route param is made available at component render time so that it can be passed safely and directly to the useGetTwitchChannel hook. Using router.query in component causes it to be undefined on initial render.
/* eslint-disable-next-line */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const channelId = sanitiseChannelQuery(context.query);

  // Pass data to the page via props
  return { props: { channelId } }
}

const YouTubeChannel = ({ channelId }: YouTubeChannelProps) => {
  const { isLoading, isError, data, error } = useGetYouTubeChannel(channelId);

  useEffect(() => {
    if (data) {
      console.log(data)
    }
  }, [data]);


  return (
    <div>
      {isLoading && (<div>YouTube loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      {data && (
        <div>
          {data.channelData ? (
            <section>
              <div>
                <h2>{data.channelData.snippet.title}</h2>
                <p>{data.channelData.snippet.description}</p>
                <Image src={data.channelData.snippet.thumbnails.medium.url} alt={`${data.channelData.snippet.title} channel thumbnail`} height={100} width={100} layout="fixed" />
                <Image src={data.channelData.brandingSettings.image.bannerExternalUrl} alt={`${data.channelData.snippet.title} channel banner`} height={100} width={100} layout="fixed" />
              </div>
              <div>
                <p>{data.channelData.statistics.subscriberCount} subscribers</p>
                <p>{data.channelData.statistics.videoCount} videos</p>
              </div>
            </section>
          ) : (
            <p>Channel not found</p>
          )}
        </div>
      )}
    </div>
  )
}

export default YouTubeChannel
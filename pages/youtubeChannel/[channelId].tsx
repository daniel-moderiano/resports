import { useGetYouTubeChannel } from '../../hooks/useGetYouTubeChannel';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';

// * The Search: list method can be used with a 'channelId' filter to yield all videos for a channel!

const YouTubeChannel = () => {
  const router = useRouter();
  const { channelId } = router.query;
  const { isLoading, isError, data, error } = useGetYouTubeChannel('');

  useEffect(() => {
    if (data) {
      console.log(data);

    }
  }, [data])

  return (
    <div>
      {isLoading && (<div>Twitch loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      {data && (
        <section>
          <div>
            <h2>{data.snippet.title}</h2>
            <p>{data.snippet.description}</p>
            <Image src={data.snippet.thumbnails.medium.url} alt={`${data.snippet.title} channel thumbnail`} height={100} width={100} layout="fixed" />
            <Image src={data.brandingSettings.image.bannerExternalUrl} alt={`${data.snippet.title} channel banner`} height={100} width={100} layout="fixed" />
          </div>
          <div>
            <p>{data.statistics.subscriberCount} subscribers</p>
            <p>{data.statistics.videoCount} videos</p>
          </div>
        </section>
      )}
    </div>
  )
}

export default YouTubeChannel
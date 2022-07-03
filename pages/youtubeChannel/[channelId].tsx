import { useGetYouTubeChannel } from '../../hooks/useGetYouTubeChannel';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useEffect } from 'react';
import { sanitiseChannelQuery } from '../../helpers/queryHandling';
import { GetServerSideProps } from 'next';

// * The Search: list method can be used with a 'channelId' filter to yield all videos for a channel!

interface YouTubeChannelProps {
  channelId: string;
}

// This server side props function ensures the dynamic route param is made available at component render time so that it can be passed safely and directly to the useGetTwitchChannel hook. Using router.query in component causes it to be undefined on initial render.
/* eslint-disable-next-line */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const channelId = sanitiseChannelQuery(context.query);

  // Pass data to the page via props
  return { props: { channelId } }
}

const YouTubeChannel = ({ channelId }: YouTubeChannelProps) => {
  const router = useRouter();
  const { isLoading, isError, data, error } = useGetYouTubeChannel(channelId);

  useEffect(() => {
    if (data) {
      console.log(data);

    }
  }, [data])

  return (
    <div>
      {isLoading && (<div>YouTube loading...</div>)}

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
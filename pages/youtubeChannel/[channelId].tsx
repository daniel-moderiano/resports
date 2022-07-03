import { useGetYouTubeChannel } from '../../hooks/useGetYouTubeChannel';
import Image from 'next/image';
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
  const { isLoading, isError, data, error } = useGetYouTubeChannel(channelId);

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
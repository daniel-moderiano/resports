import { useGetTwitchVideos } from '../hooks/useGetTwitchVideos'
import TwitchVideoListing from './TwitchVideoListing';

interface TwitchChannelVideosProps {
  userId: string;
}

// Make API call here to fetch videos using channel/user ID
// * Use the archive video type filter to get past broadcasts!!

const TwitchChannelVideos = ({ userId }: TwitchChannelVideosProps) => {
  const { isError, isLoading, data, error } = useGetTwitchVideos(userId);

  return (
    <section>
      <h2>Twitch Channel Videos</h2>
      {isLoading && (<div>Videos loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      {data && (
        <>
          {data.length > 0 ? (
            <>
              {data.map((video) => (
                <TwitchVideoListing key={video.id} videoData={video} />
              ))}
            </>
          ) : (
            <div>No videos</div>
          )}
        </>
      )}
    </section>
  )
}

export default TwitchChannelVideos
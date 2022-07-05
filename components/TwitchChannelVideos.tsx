import { useGetTwitchVideos } from '../hooks/useGetTwitchVideos'

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
                // Individual video component here
                <div key={video.id}>
                  {video.title}

                  <p>{video.type}</p>
                </div>
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
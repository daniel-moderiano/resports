import { useGetTwitchVideos } from '../hooks/useGetTwitchVideos'

interface TwitchChannelVideosProps {
  userId: string;
}

// Make API call here to fetch videos using channel/user ID

const TwitchChannelVideos = ({ userId }: TwitchChannelVideosProps) => {
  const { isError, isLoading, data, error } = useGetTwitchVideos(userId)


  return (
    <section>
      <h2>Twitch Channel Videos</h2>

    </section>
  )
}

export default TwitchChannelVideos
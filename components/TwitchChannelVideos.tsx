interface TwitchChannelVideosProps {
  userId: string;
}

// Make API call here to fetch videos using channel/user ID

const TwitchChannelVideos = ({ userId }: TwitchChannelVideosProps) => {
  return (
    <section>
      <h2>Twitch Channel Videos</h2>
    </section>
  )
}

export default TwitchChannelVideos
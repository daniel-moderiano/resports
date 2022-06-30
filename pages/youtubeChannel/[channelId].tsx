import { useRouter } from 'next/router';

const YouTubeChannel = () => {
  const router = useRouter();
  const { channelId } = router.query;

  return (
    <div>
      <h2>YouTubeChannel</h2>
      <p>{channelId}</p>
    </div>
  )
}

export default YouTubeChannel
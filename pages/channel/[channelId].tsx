import { useRouter } from 'next/router';

const Channel = () => {
  const router = useRouter();
  const { channelId } = router.query;

  return (
    <div>
      <h2>Channel</h2>
      <p>{channelId}</p>
    </div>
  )
}

export default Channel
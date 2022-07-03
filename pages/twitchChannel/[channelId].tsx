import { useGetTwitchChannel } from 'hooks/useGetTwitchChannel';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

// The Twitch API 'get channel information' route provides LESS information than the general Channel search API. For this reason, data is not re-fetched, but instead passed from the previous search

// * Alternatively pass the channel ID and user/owner ID through the URL param, then perform two API queries to form the complete set of channel data

const TwitchChannel = () => {
  const router = useRouter();
  const { channelId } = router.query;



  const { isLoading, isError, data, error } = useGetTwitchChannel("145780645");

  useEffect(() => {
    if (data) {
      console.log(data);

    }
  }, [data])

  return (
    <div>
      <h2>TwitchChannel</h2>
      <p>{channelId}</p>
    </div>
  )
}

export default TwitchChannel
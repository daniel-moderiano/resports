import { useEffect } from 'react';
import { useTwitchSearch } from '../hooks/useTwitchSearch';
import TwitchChannelResult from './TwitchChannelResult'

interface TwitchSearchTabProps {
  searchQuery: string;
}

const TwitchSearchTab = ({ searchQuery }: TwitchSearchTabProps) => {

  const { isLoading, isError, data, error, isIdle } = useTwitchSearch(searchQuery);

  useEffect(() => {
    if (data) {
      console.log(data);

    }
    if (error) {
      console.log(error);
    }

    if (isIdle) {
      console.log('Awaiting conditions for API call');
    }
  }, [error, isIdle, data])

  return (
    <div>
      <div>You searched for {searchQuery}</div>
      {isLoading && <div>Twitch loading...</div>}
      {isLoading && <div>YouTube loading...</div>}
      {data && (
        <>
          {data.map((channel) => (
            <TwitchChannelResult key={channel.id} channelData={channel} />
          ))}
        </>
      )}
    </div>
  )
}

export default TwitchSearchTab
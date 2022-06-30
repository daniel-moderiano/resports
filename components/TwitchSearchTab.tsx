import { useEffect } from 'react';
import { useTwitchSearch } from '../hooks/useTwitchSearch';
import TwitchChannelResult from './TwitchChannelResult'

// TODO: handle search that produces no results

interface TwitchSearchTabProps {
  searchQuery: string;
  isValidSearch: boolean;
}

const TwitchSearchTab = ({ searchQuery, isValidSearch }: TwitchSearchTabProps) => {

  const { isLoading, isError, data, error, isIdle } = useTwitchSearch(searchQuery, isValidSearch);

  console.log(data);

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }

    if (isLoading) {
      console.log('Twitch loading');
    }

    if (isIdle) {
      console.log('Awaiting conditions for API call');
    }
  }, [error, isIdle, data, isLoading])

  return (
    <div>
      <h2>Twitch Tab</h2>
      <div>You searched for {searchQuery}</div>
      {isLoading && <div>Twitch loading...</div>}
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
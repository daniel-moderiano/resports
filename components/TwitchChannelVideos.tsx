import { HelixVideoType } from '@twurple/api/lib';
import { useGetTwitchVideos } from '../hooks/useGetTwitchVideos'
import TwitchVideoListing from './TwitchVideoListing';
import * as React from 'react';
import styles from '../styles/componentStyles/TwitchChannelVideos.module.css';
import {filterByDate, filterByDuration, filterByKeyword} from "../helpers/twitchVideoFilters";

interface TwitchChannelVideosProps {
  userId: string;
}

// Make API call here to fetch videos using channel/user ID
// * Use the archive video type filter to get past broadcasts!!

const TwitchChannelVideos = ({ userId }: TwitchChannelVideosProps) => {
  const [videoType, setVideoType] = React.useState<HelixVideoType | undefined | 'all'>('archive');
  const { isError, isLoading, data } = useGetTwitchVideos(userId, videoType);

  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // This typecasting is required, as you cannot simply assign the 'string' value type to the videoType state
    setVideoType(e.target.value as HelixVideoType | 'all');
  }

  return (
    <section>
      <h2>Twitch Channel Videos</h2>
      {isLoading && (<div>Videos loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      <label htmlFor="videoType">Video type</label>
      <select defaultValue={videoType} onChange={handleOptionSelect} name="videoType" id="videoType">
        <option value="all" data-testid="allOption">All videos</option>
        <option value="archive" data-testid="broadcastOption">Broadcasts</option>
      </select>

      {data && (
        <div className={styles.videosList}>
          {data.length > 0 ? (
            <>
              {data.map((video) => (
                <TwitchVideoListing key={video.id} videoData={video} />
              ))}
            </>
          ) : (
            <div>No videos</div>
          )}
        </div>
      )}
    </section>
  )
}

export default TwitchChannelVideos
import {HelixVideo, HelixVideoType} from '@twurple/api/lib';
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
  const [filteredVideos, setFilteredVideos] = React.useState<HelixVideo[] | undefined | null>(null);

  const [dateFilter, setDateFilter] = React.useState<Date | null>(null);
  const [durationFilter, setDurationFilter] = React.useState<number | null>(null);
  const [keywordFilter, setKeywordFilter] = React.useState<string | null>(null);


  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // This typecasting is required, as you cannot simply assign the 'string' value type to the videoType state
    setVideoType(e.target.value as HelixVideoType | 'all');
  }

  // The use of an effect here ensures that the data set is not only filtered before initial rendering of data, but is open to modification after the data has been rendered.
  React.useEffect(() => {
    if (data && filteredVideos) {   // cannot filter data set until it is available

      // Set initial data set to filteredVideos state. This only runs on initial render
      if (filteredVideos === null) {
        setFilteredVideos(data)
      }

      // Re-filter videos
      if (dateFilter) {
        setFilteredVideos(filterByDate(filteredVideos, dateFilter));
      }

      if (durationFilter) {
        setFilteredVideos(filterByDuration(filteredVideos, durationFilter));
      }

      if (keywordFilter) {
        setFilteredVideos(filterByKeyword(filteredVideos, keywordFilter));
      }
    }
  }, [data, dateFilter, durationFilter, keywordFilter]);


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

      {/*Ensure an option exists to clear all filters*/}
      <button onClick={() => setFilteredVideos(data ? data : null)}>Clear filters</button>

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

import {HelixVideo, HelixVideoType} from '@twurple/api/lib';
import { useGetTwitchVideos } from '../hooks/useGetTwitchVideos'
import TwitchVideoListing from './TwitchVideoListing';
import * as React from 'react';
import styles from '../styles/componentStyles/TwitchChannelVideos.module.css';
import {filterByDate, filterByDuration, filterByKeyword} from "../helpers/twitchVideoFilters";
import TwitchFilterMenu from "@/components/TwitchFilterMenu";
import {useState} from "react";

interface TwitchChannelVideosProps {
  userId: string;
}

export interface VideoFilters {
  dateFilter: Date | null;
  minDurationFilter: number | null;
  maxDurationFilter: number | null;
  keywordFilter: string | null;

}

// Make API call here to fetch videos using channel/user ID
// * Use the archive video type filter to get past broadcasts!!

const TwitchChannelVideos = ({ userId }: TwitchChannelVideosProps) => {
  const [filters, setFilters] = React.useState<VideoFilters>({
    dateFilter: null,
    minDurationFilter: null,
    maxDurationFilter: null,
    keywordFilter: null,
  });

  const handleOptionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // This typecasting is required, as you cannot simply assign the 'string' value type to the videoType state
    setFilters((prevFilters) => ({
      ...prevFilters,
      videoType: e.target.value as HelixVideoType | 'all'
    }));
  }

  const [videoType, setVideoType] = useState<HelixVideoType | undefined | 'all'>('archive');
  const [hideVideos, setHideVideos] = useState(true);
  const [filteredVideos, setFilteredVideos] = React.useState<HelixVideo[] | undefined | null>(null);
  const { isError, isLoading, data } = useGetTwitchVideos(userId, videoType);

  return (
    <section>
      <h2>Twitch Channel Videos</h2>
      {isLoading && (<div>Videos loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      <TwitchFilterMenu
        filters={filters}
        setFilters={setFilters}
        filteredVideos={filteredVideos}
        setFilteredVideos={setFilteredVideos}
      />

      {/*Ensure an option exists to clear all filters*/}
      <button onClick={() => setFilteredVideos(data ? data : null)}>Clear filters</button>

      <div>
        <label htmlFor="videoType">Video type</label>
        <select defaultValue={videoType} onChange={handleOptionSelect} name="videoType" id="videoType">
          <option value="all" data-testid="allOption">All videos</option>
          <option value="archive" data-testid="broadcastOption">Broadcasts</option>
        </select>
      </div>

      <div className={styles.container}>
        {hideVideos && <div className={styles.overlay} data-testid="overlay">
          <button onClick={() => setHideVideos(false)}>Reveal videos</button>
        </div>}
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
      </div>


    </section>
  )
}

export default TwitchChannelVideos

import {HelixVideo, HelixVideoType} from '@twurple/api/lib';
import { useGetTwitchVideos } from '../hooks/useGetTwitchVideos'
import TwitchVideoListing from './TwitchVideoListing';
import * as React from 'react';
import styles from '../styles/componentStyles/TwitchChannelVideos.module.css';
import {filterByDate, filterByDuration, filterByKeyword} from "../helpers/twitchVideoFilters";
import TwitchFilterMenu from "@/components/TwitchFilterMenu";

interface TwitchChannelVideosProps {
  userId: string;
}

export interface VideoFilters {
  dateFilter: Date | null;
  durationFilter: number | null;
  keywordFilter: string | null;
  videoType: HelixVideoType | undefined | 'all';
}

// Make API call here to fetch videos using channel/user ID
// * Use the archive video type filter to get past broadcasts!!

const TwitchChannelVideos = ({ userId }: TwitchChannelVideosProps) => {
  const [filters, setFilters] = React.useState<VideoFilters>({
    dateFilter: null,
    durationFilter: null,
    keywordFilter: null,
    videoType: 'archive'
  });

  const { isError, isLoading, data } = useGetTwitchVideos(userId, filters.videoType);
  const [filteredVideos, setFilteredVideos] = React.useState<HelixVideo[] | undefined | null>(null);


  return (
    <section>
      <h2>Twitch Channel Videos</h2>
      {isLoading && (<div>Videos loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      <TwitchFilterMenu filters={filters} setFilters={setFilters}/>

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

import { HelixVideoType } from '@twurple/api/lib';
import { useState } from 'react';
import { useGetTwitchVideos } from '../hooks/useGetTwitchVideos'
import TwitchVideoListing from './TwitchVideoListing';
import * as React from 'react'

interface TwitchChannelVideosProps {
  userId: string;
}

// Make API call here to fetch videos using channel/user ID
// * Use the archive video type filter to get past broadcasts!!

const TwitchChannelVideos = ({ userId }: TwitchChannelVideosProps) => {


  const [videoType, setVideoType] = React.useState<HelixVideoType | undefined | 'all'>('archive');

  const { isError, isLoading, data, error, refetch } = useGetTwitchVideos(userId, videoType);

  const refetchQuery = () => {
    setVideoType('all');
  }

  return (
    <section>
      <h2>Twitch Channel Videos</h2>
      {isLoading && (<div>Videos loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      <button onClick={refetchQuery}>Toggle all vids</button>

      {data && (
        <>
          {data.length > 0 ? (
            <>
              {data.map((video) => (
                <TwitchVideoListing key={video.id} videoData={video} />
              ))}
            </>
          ) : (
            <div>No videos</div>
          )}
        </>
      )}
    </section>
  )
}

export default TwitchChannelVideos
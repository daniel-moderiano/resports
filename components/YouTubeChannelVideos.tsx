import {useGetYouTubeVideos} from "../hooks/useGetYouTubeVideos";
import * as React from "react";
import YouTubeVideoListing from "@/components/YouTubeVideoListing";
import {useState} from "react";
import styles from "@/styles/componentStyles/YouTubeChannelVideos.module.css";
import VideosFilterMenu from "@/components/VideosFilterMenu";
import {VideoFilters} from "@/components/TwitchChannelVideos";

interface YouTubeChannelVideosProps {
  uploadsId: string;
}

const YouTubeChannelVideos = ({uploadsId}: YouTubeChannelVideosProps) => {
  const { isLoading, isError, data } = useGetYouTubeVideos(uploadsId);
  const [hideVideos, setHideVideos] = useState(true);
  const [filters, setFilters] = React.useState<VideoFilters | null>(null);

  return (
    <div>YouTube Channel Videos
      {isLoading && (<div>YouTube loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

      <VideosFilterMenu
        setFilters={setFilters}
      />

      <div className={styles.container}>
        {hideVideos && <div className={styles.overlay} data-testid="overlay">
          <button onClick={() => setHideVideos(false)}>Reveal videos</button>
        </div>}
        {data && (
          <div className={styles.videosList}>
            {data.items.length > 0 ? (
              <>
                {data.items.map((video) => (
                  <YouTubeVideoListing key={video.id} videoData={video}/>
                ))}
              </>
            ) : (
              <div>No videos</div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default YouTubeChannelVideos;
import {useGetYouTubeVideos} from "../hooks/useGetYouTubeVideos";
import * as React from "react";
import YouTubeVideoListing from "@/components/YouTubeVideoListing";
import {useState} from "react";
import styles from "@/styles/componentStyles/YouTubeChannelVideos.module.css";

interface YouTubeChannelVideosProps {
  uploadsId: string;
}

const YouTubeChannelVideos = ({uploadsId}: YouTubeChannelVideosProps) => {
  const { isLoading, isError, data } = useGetYouTubeVideos(uploadsId);
  const [hideVideos, setHideVideos] = useState(true);

  return (
    <div>YouTube Channel Videos
      {isLoading && (<div>YouTube loading...</div>)}

      {isError && (<div>An error has occurred</div>)}

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
import { HelixVideo } from "@twurple/api/lib";
import Image from 'next/image';
import { convertTwitchVideoDuration } from '../helpers/videoDurationConversion';
import { timeAgo } from '../config/timeAgoFormatter';
import styles from '../styles/componentStyles/TwitchVideoListing.module.css';

interface TwitchVideoListingProps {
  videoData: HelixVideo
}

const TwitchVideoListing = ({ videoData }: TwitchVideoListingProps) => {
  return (
    <div className={styles.videoListing}>
      <div className={styles.imageContainer}>
        <Image src={videoData.getThumbnailUrl(169, 100)} height={100} width={169} layout="fixed" alt="Video thumbnail" />
        <p className={styles.duration}>{convertTwitchVideoDuration(videoData.duration)}</p>
        <p className={styles.createdAt}>{timeAgo.format(videoData.creationDate)}</p>
      </div>
      <h4>{videoData.title}</h4>
      <p>{videoData.userDisplayName}</p>
    </div>
  )
}

export default TwitchVideoListing
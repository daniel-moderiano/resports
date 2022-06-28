import { YouTubeSearchResultSnippet } from "types/youtubeAPITypes";
import Image from 'next/image';
import styles from '../styles/componentStyles/YouTubeSearchResult.module.css'

interface YouTubeChannelResultProps {
  channelData: YouTubeSearchResultSnippet;
}

const YouTubeChannelResult = ({ channelData }: YouTubeChannelResultProps) => {
  return (
    <div className={styles.channel}>
      <Image src={channelData.thumbnails.medium.url} alt={`${channelData.channelTitle} channel thumbnail`} height={100} width={100} className={styles.thumbnail} layout="raw" />
      <div className={styles.channelText}>
        <h3 className={styles.channelTitle}>{channelData.channelTitle}</h3>
        <p className={styles.description}>{channelData.description}</p>
      </div>
    </div>
  )
}

export default YouTubeChannelResult
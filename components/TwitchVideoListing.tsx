import { HelixVideo } from "@twurple/api/lib";
import Image from 'next/image';
import { convertTwitchVideoDuration } from '../helpers/videoDurationConversion';
import TimeAgo from 'javascript-time-ago';

// Create datetime formatter (English language). This is used to convert JS Dates to a 'x time ago..' format
const timeAgo = new TimeAgo('en-AU')

interface TwitchVideoListingProps {
  videoData: HelixVideo
}

const TwitchVideoListing = ({ videoData }: TwitchVideoListingProps) => {
  return (
    <div>
      <h4>{videoData.title}</h4>
      <p>{videoData.description}</p>
      <p>{convertTwitchVideoDuration(videoData.duration)}</p>
      <Image src={videoData.getThumbnailUrl(169, 100)} height={100} width={169} layout="fixed" alt="Video thumbnail" />
      <p>{timeAgo.format(videoData.creationDate)}</p>
      <p>{videoData.userDisplayName}</p>
    </div>
  )
}

export default TwitchVideoListing
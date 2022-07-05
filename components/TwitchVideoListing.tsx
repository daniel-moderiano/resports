import { HelixVideo } from "@twurple/api/lib";
import Image from 'next/image'

interface TwitchVideoListingProps {
  videoData: HelixVideo
}

const TwitchVideoListing = ({ videoData }: TwitchVideoListingProps) => {
  return (
    <div>
      <h4>{videoData.title}</h4>
      <p>{videoData.description}</p>
      <p>{videoData.duration}</p>
      <Image src={videoData.getThumbnailUrl(169, 100)} height={100} width={169} layout="fixed" alt="Video thumbnail" />
    </div>
  )
}

export default TwitchVideoListing
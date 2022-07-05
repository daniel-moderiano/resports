import { HelixVideo } from "@twurple/api/lib"

interface TwitchVideoListingProps {
  videoData: HelixVideo
}

const TwitchVideoListing = ({ videoData }: TwitchVideoListingProps) => {
  return (
    <div>
      <h3>{videoData.title}</h3>
      <p>{videoData.description}</p>
      <p>{videoData.duration}</p>
    </div>
  )
}

export default TwitchVideoListing
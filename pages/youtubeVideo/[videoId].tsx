// The video/watch page that houses an embedded YouTube iframe/player
import { useYoutubeIframe } from "../../hooks/useYouTubeIframe";
import { GetServerSideProps } from "next";
import { sanitiseVideoQuery } from "helpers/queryHandling";
import YouTubePlayer from "../../components/YouTubePlayer";

interface YouTubeVideoProps {
  videoId: string;
}

// This server side props function ensures the dynamic route param is made available at component render time so that it can be passed safely and directly to the YouTubeVideo component hook. Using router.query in component causes videoId to be undefined on initial render.
/* eslint-disable-next-line */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const videoId = sanitiseVideoQuery(context.query);

  // Pass data to the page via props
  return { props: { videoId } }
}


const YouTubeVideo = ({ videoId }: YouTubeVideoProps) => {

  const { paused } = useYoutubeIframe(videoId);

  return (
    <>
      <YouTubePlayer playerReady={paused} />
    </>
  );
};

export default YouTubeVideo;

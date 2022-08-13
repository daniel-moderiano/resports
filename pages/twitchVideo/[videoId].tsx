// The video/watch page that houses an embedded Twitch iframe/player
import { GetServerSideProps } from "next";
import { useEffect } from "react";
import { sanitiseVideoQuery } from "../../helpers/queryHandling";

interface TwitchVideoProps {
  videoId: string;
}

// This server side props function ensures the dynamic route param is made available at component render time so that it can be passed safely and directly to the TwitchVideo component hook. Using router.query in component causes videoId to be undefined on initial render.
/* eslint-disable-next-line */
export const getServerSideProps: GetServerSideProps = async (context) => {
  const videoId = sanitiseVideoQuery(context.query);

  // Pass data to the page via props
  return { props: { videoId } }
}


const TwitchVideo = ({ videoId }: TwitchVideoProps) => {

  useEffect(() => {
    const tag = document.createElement('script');

    // This conditional ensures the script tag is added to a fresh page, but that if one exists, we fully reload the page. This ensures that any parameter change (e.g. change in videoId, or controls enabled vs disabled) full reloads a new iframe. The alternative would be a non-loading iframe, or no change in iframe at all
    if (!window.YT) {
      tag.src = "https://player.twitch.tv/js/embed/v1.js";
      document.body.appendChild(tag);
    } else {
      // * Reloading the iframe only does NOT achieve the desired effect!
      window.location.reload();
    }


    function createPlayer() {
      const player = new Twitch.Player('player', {
        video: videoId,
      })
    }

    tag.onload = createPlayer;

    return () => {    // ensure script tags are cleaned on dismount
      tag.remove();
    }
  }, [videoId]);

  return (
    <div>
      <p>{videoId}</p>
      Hello Sarah

      <div id="player"></div>
    </div>
  );
};

export default TwitchVideo;


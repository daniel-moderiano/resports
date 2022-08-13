// The video/watch page that houses an embedded Twitch iframe/player
import { useTwitchPlayer } from "hooks/useTwitchPlayer";
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

  const { player } = useTwitchPlayer(videoId);

  useEffect(() => {
    if (player) {
      player.addEventListener('playing', (event) => {
        console.log(event);

      })
    }
  }, [player])

  return (
    <div>
      <div id="player"></div>
      <button onClick={() => console.log(player?.getQualities())}>Get quality</button>
      <button onClick={() => console.log(player?.setQuality('chunked'))}>Set quality</button>
    </div >
  );
};

export default TwitchVideo;
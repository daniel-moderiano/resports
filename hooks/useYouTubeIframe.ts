
// Create the iframe API script tag ONLY ONCE on initial render, and ensure its removal on dismount, otherwise tons of script tags will stack up
import { useEffect } from "react";
import * as React from "react";
import { YouTubePlayer } from "youtube-player/dist/types";


export const useYoutubeIframe = (videoId: string) => {
  const [player, setPlayer] = React.useState<null | YouTubePlayer>(null);
  const [windowLoaded, setWindowLoaded] = React.useState<number>(0);

  useEffect(() => {
    const tag = document.createElement('script');

    if (!window.YT) {   // ensure duplicate tag append does not occur
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    let player: YT.Player;

    // This function/property fires only once the API has loaded. This is different to the window.YT object simply becoming 'available'. However, within this function, YT can be called directly, vs calling window.YT
    window.onYouTubeIframeAPIReady = createPlayer;


    function createPlayer() {
      player = new YT.Player('player', {
        videoId: videoId,
        width: window.innerWidth,
        height: window.innerWidth * (9 / 16),
        events: {
          onReady: (event) => {
            // event.target.playVideo();
          }
        }
      });
    }


    return () => {    // ensure script tags are cleaned on dismount
      document.body.removeChild(tag);
    }
  }, [videoId]);

  return { player, windowLoaded }
};
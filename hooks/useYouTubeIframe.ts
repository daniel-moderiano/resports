
// Create the iframe API script tag ONLY ONCE on initial render, and ensure its removal on dismount, otherwise tons of script tags will stack up
import { useEffect } from "react";
import * as React from "react";
import { YouTubePlayer } from "youtube-player/dist/types";


export const useYoutubeIframe = () => {
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
    window.onYouTubeIframeAPIReady = loadVideo;

    function loadVideo() {
      if (!player) {
        player = new YT.Player('player', {
          videoId: 'ZPt9dJw1Dbw',
          events: {
            onReady: (event) => {
              event.target.playVideo();
              event.target.loadVideoById({
                videoId: 'ZPt9dJw1Dbw'
              });
            }
          }
        });
      }
      if (player && player.loadVideoById) {
        player.loadVideoById({ videoId: 'ZPt9dJw1Dbw' });
      }
    }

    // function onPlayerReady(event: YT.PlayerEvent) {
    //   event.target.playVideo();
    // }

    // let done = false;

    // function onPlayerStateChange(event: YT.OnStateChangeEvent) {
    //   if (event.data == YT.PlayerState.PLAYING && !done) {
    //     setTimeout(stopVideo, 6000);
    //     done = true;
    //   }
    // }

    // function stopVideo() {
    //   player.stopVideo();
    // }

    return () => {    // ensure script tags are cleaned on dismount
      document.body.removeChild(tag);
    }
  }, []);

  return { player, windowLoaded }
};
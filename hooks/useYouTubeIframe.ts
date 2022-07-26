import { useEffect, useState } from "react";

export const useYoutubeIframe = (videoId: string) => {
  const [paused, setPaused] = useState(false);

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
        playerVars: {
          controls: 0,
          enablejsapi: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          autoplay: 0,
          showinfo: 0,
        },
      });
    }

    return () => {    // ensure script tags are cleaned on dismount
      document.body.removeChild(tag);
    }
  }, [videoId]);

  return {
    paused
  }
};
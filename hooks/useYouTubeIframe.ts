import { useEffect } from "react";
import * as React from 'react'

export const useYouTubeIframe = (
  videoId: string,
  enableControls: boolean,
  onPlayerReady?: (event: YT.PlayerEvent) => void,
  onPlayerStateChange?: (event: YT.OnStateChangeEvent) => void,
) => {
  const [player, setPlayer] = React.useState<YT.Player | undefined>(undefined);

  useEffect(() => {
    const tag = document.createElement('script');

    if (!window.YT) {   // ensure duplicate tag append does not occur
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    // This function/property fires only once the API has loaded. This is different to the window.YT object simply becoming 'available'. However, within this function, YT can be called directly, vs calling window.YT
    window.onYouTubeIframeAPIReady = createPlayer;

    function createPlayer() {
      // Create the player (which will add the YT iFrame to the div#player)
      const player = new YT.Player('player', {
        videoId: videoId,
        playerVars: {
          controls: enableControls ? 1 : 0,
          enablejsapi: 1,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          disablekb: 1,
          mute: 1,
          autohide: 1,
        },

        events: {
          onReady: () => {
            // By setting the player here, we can ensure that the player state always returns a fully initialised player that is able to have its methods called.
            setPlayer(player);
            onPlayerReady
          },
          onStateChange: onPlayerStateChange,
        }
      });
    }

    return () => {    // ensure script tags are cleaned on dismount
      tag.remove();
    }
  }, [videoId, onPlayerReady, onPlayerStateChange, enableControls]);

  return {
    player
  }
};
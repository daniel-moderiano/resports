import { useEffect } from "react";
import * as React from 'react'

export const useTwitchPlayer = (
  videoId: string,
) => {
  const [player, setPlayer] = React.useState<YT.Player | undefined>(undefined);

  useEffect(() => {
    const tag = document.createElement('script');

    // This conditional ensures the script tag is added to a fresh page, but that if one exists, we fully reload the page. This ensures that any parameter change (e.g. change in videoId, or controls enabled vs disabled) full reloads a new iframe. The alternative would be a non-loading iframe, or no change in iframe at all
    if (!window.YT) {
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    } else {
      // * Reloading the iframe only does NOT achieve the desired effect!
      window.location.reload();
    }

    // This function/property fires only once the API has loaded. This is different to the window.YT object simply becoming 'available'. However, within this function, YT can be called directly, vs calling window.YT
    window.onYouTubeIframeAPIReady = createPlayer;

    function createPlayer() {
      const player = new Twitch.Player('player', {
        video: videoId,
      })
    }

    return () => {    // ensure script tags are cleaned on dismount
      tag.remove();
    }
  }, [videoId]);

  return {
    player
  }
};
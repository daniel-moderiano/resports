
// Create the iframe API script tag ONLY ONCE on initial render, and ensure its removal on dismount, otherwise tons of script tags will stack up
import {useEffect} from "react";
import * as React from "react";
import {YouTubePlayer} from "youtube-player/dist/types";
import {log} from "util";

export const useYoutubeIframe = () => {
  const [player, setPlayer] = React.useState<null | YouTubePlayer>(null);
  const [windowLoaded, setWindowLoaded] = React.useState<number>(0);

  useEffect(() => {
    const tag = document.createElement('script');

    if (!window.YT) {   // ensure duplicate tag append does not occur
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);
    }

    window.onYouTubeIframeAPIReady = () => console.log('Actually loaded', window.YT);

    return () => {    // ensure script tags are cleaned on dismount
      document.body.removeChild(tag);
    }
  }, []);

  return { player, windowLoaded }
};
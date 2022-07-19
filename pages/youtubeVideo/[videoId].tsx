// The video/watch page that houses an embedded YouTube iframe/player

import {useEffect} from "react";

const YouTubeVideo = () => {

  // Create the iframe API script tag ONLY ONCE on initial render, and ensure its removal on dismount, otherwise tons of script tags will stack up
  useEffect(() => {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    tag.async = true;

    document.body.appendChild(tag);

    return () => {
      document.body.removeChild(tag);
    }
  }, []);

  return (
    <div>

      <div id="player"></div>


    </div>
  );
};

export default YouTubeVideo;

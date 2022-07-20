// The video/watch page that houses an embedded YouTube iframe/player

import {useEffect, useState} from "react";
import * as React from 'react';

const YouTubeVideo = () => {

  const [YT, setYT] = React.useState<any>(undefined);



  // Create the iframe API script tag ONLY ONCE on initial render, and ensure its removal on dismount, otherwise tons of script tags will stack up
  // Consider abstracting this to a custom hook that can be tested, as unit testing this component won't capture script tags appended to <body>
  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    return () => {
      document.body.removeChild(tag);
    }
  }, []);

  useEffect(() => {
    if (YT === undefined) {
      console.log('Awaiting YT')
      setYT(window.YT);
    } else {
      console.log(YT)
    }
  }, [YT]);


  return (
    <div>

      <div id="player"></div>


    </div>
  );
};

export default YouTubeVideo;

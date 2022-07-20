// The video/watch page that houses an embedded YouTube iframe/player

import {useEffect, useState} from "react";
import * as React from 'react';
import {useYoutubeIframe} from "../../hooks/useYouTubeIframe";

const YouTubeVideo = () => {
  // Create the iframe API script tag ONLY ONCE on initial render, and ensure its removal on dismount, otherwise tons of script tags will stack up
  // Consider abstracting this to a custom hook that can be tested, as unit testing this component won't capture script tags appended to <body>
  // useEffect(() => {
  //   const tag = document.createElement('script');
  //   tag.src = "https://www.youtube.com/iframe_api";
  //   document.body.appendChild(tag);
  //
  //   function onYouTubeIframeAPIReady() {
  //     console.log('Yay, YT exists!', window.YT);
  //   }
  //
  //   return () => {
  //     document.body.removeChild(tag);
  //   }
  // }, []);

  useYoutubeIframe(() => {
    console.log(window.YT)})


  return (
    <div>

      <div id="player"></div>


    </div>
  );
};

export default YouTubeVideo;

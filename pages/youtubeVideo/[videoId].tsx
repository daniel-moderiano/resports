// The video/watch page that houses an embedded YouTube iframe/player

import {useYoutubeIframe} from "../../hooks/useYouTubeIframe";
import {useEffect, useState} from "react";

let player;

const YouTubeVideo = () => {
  const [youtubeId, setYoutubeId] = useState("ZPt9dJw1Dbw");

  useYoutubeIframe();

  // useEffect(() => {
  {/*  if (!window.YT) {*/}
  {/*    // If not, load the script asynchronously*/}
  {/*    const tag = document.createElement("script");*/}
  //     tag.src = "https://www.youtube.com/iframe_api";
  //
  //     // onYouTubeIframeAPIReady will load the video after the script is loaded
  //
  //     window.onYouTubeIframeAPIReady = loadVideo;
  //
  //     const firstScriptTag = document.getElementsByTagName("script")[0];
  //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  //   } else {
  //     loadVideo();
  //   }
  //
  //   function loadVideo() {
  //     if (!player) {
  //       player = new window.YT.Player(`youtube-player-${youtubeId}`, {
  //         videoId: youtubeId,
  //         events: {
  //           onReady: (event) => {
  //             event.target.playVideo();
  //             event.target.loadVideoById({
  //               videoId: youtubeId
  //             });
  //           }
  //         }
  //       });
  //     }
  //     if (player && player.loadVideoById) {
  //       player.loadVideoById({ videoId: youtubeId });
  //     }
  //   }
  //   //
  // }, [youtubeId]);

  const foo = () => {
    setYoutubeId("ZrNqjSCfL8E");
  };

  return (
    <div>
      <div id={`youtube-player-${youtubeId}`} />
      <button onClick={foo}>change video</button>
    </div>
  );
};

export default YouTubeVideo;

import React from 'react';

export const useYoutubeIframe = (callback: () => any) => {
  React.useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(tag);

      tag.onload = callback;
    } else {
      callback();
    }
  }, []);
};
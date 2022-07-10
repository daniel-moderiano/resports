// These functions are intended for use in the TwitchChannelVideos component to filter the returned videos data set according to the specifications

import {HelixVideo} from "@twurple/api/lib";

export const filterByDate = () => {

};

// Currently this only takes a minimum duration, and is used to return only those videos longer than the specified duration
export const filterByDuration = (videos: HelixVideo[], minimumDurationInSeconds: number) => {
  const filteredVideos = videos.filter((video) => {
    return video.durationInSeconds > minimumDurationInSeconds;
  });

  return filteredVideos;
};

// Essentially used as a search function with a user provided keyword/search query
export const filterByKeyword = (videos: HelixVideo[], keyword: string) => {
  const filteredVideos = videos.filter((video) => {
    return video.title.includes(keyword.trim());
  });

  return filteredVideos;
};


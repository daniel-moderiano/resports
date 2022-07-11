// These functions are intended for use in the TwitchChannelVideos component to filter the returned videos data set according to the specifications
import {HelixVideo} from "@twurple/api/lib";

// Able to take any kind of date input. It was decided to include a >= operator as it makes intuitive sense to filter by 'created after this date' to include time later that day ON the date/time selected
export const filterByDate = (videos: HelixVideo[], dateLimit: Date) => {
  const filteredVideos = videos.filter((video) => {
    return video.creationDate <= dateLimit;
  });

  return filteredVideos;
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


import { useGapiContext } from "../context/GapiContext";
import { useQuery } from "react-query";
import { YouTubeSearchListResponse } from "types/youtubeAPITypes";

export const useGetYouTubeChannel = (channelId: string, conditions?: boolean) => {
  const { gapiClientReady } = useGapiContext();

  const { isLoading, isError, data, error } = useQuery(['youtubeChannel', channelId], async () => {
    // GAPI client will throw it's own error if there is a problem with the request, there is no need for a specific try/catch here

    // Make a request to 'search' for a YouTube channel by channel ID. This will return a single result
    const response = await gapi.client.request({
      'path': 'https://www.googleapis.com/youtube/v3/channels',
      params: {
        part: [   // the nature of data returned
          "snippet",
          "brandingSettings",
          "statistics",
        ],
        id: channelId   // filter/search by channelId
      }
    });

    // const searchResult = response.result as YouTubeChannelSearchListResponse;
    // return searchResult.items[0]

    // * This ignores pagination at this stage
    return response.result as YouTubeSearchListResponse;
  }, {
    // Check for additional conditions before formulating enabled expression. gapiClientReady must always be present, as must enableApi
    enabled: (conditions !== undefined) ? (conditions && gapiClientReady) : gapiClientReady
  });

  return {
    isLoading,
    isError,
    data,
    error,
  }
}

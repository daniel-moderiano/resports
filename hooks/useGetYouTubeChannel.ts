import { useGapiContext } from "../context/GapiContext";
import { useQuery } from "react-query";
import { YouTubeSearchListResponse } from "types/youtubeAPITypes";

export const useYouTubeSearch = (channelId: string, conditions?: boolean) => {
  const { gapiClientReady } = useGapiContext();

  const { isLoading, isError, data, error } = useQuery(['youtubeChannel', channelId], async () => {
    // GAPI client will throw it's own error if there is a problem with the request, there is no need for a specific try/catch here
    console.log('Calling YouTube API fetch');

    const response = await gapi.client.request({
      'path': 'https://www.googleapis.com/youtube/v3/channels',
      params: {
        part: 'snippet',    // the type/nature of data returned
      }
    });

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

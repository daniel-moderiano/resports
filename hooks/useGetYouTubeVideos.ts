import { useGapiContext } from "../context/GapiContext";
import { useQuery } from "react-query";
import { YouTubeSearchListResponse } from "types/youtubeAPITypes";

// Conditions specify any additional criteria that must evaluate to true before the query is executed
export const useGetYouTubeVideos = (playlistId: string, conditions?: boolean) => {
  const { gapiClientReady } = useGapiContext();

  const { isLoading, isError, data, error } = useQuery(['youtubeChannelVideos', playlistId], async () => {
    // GAPI client will throw its own error if there is a problem with the request, there is no need for a specific try/catch here
    console.log('Calling YouTube API fetch');

    const response = await gapi.client.request({
      'path': 'https://www.googleapis.com/youtube/v3/playlistItems',
      params: {
        part: 'snippet,id,contentDetails',    // the information returned
        playlistId: playlistId,   // returns only videos by the specified channel (max 500)
        maxResults: 50    // max number of results per page (50 max)
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

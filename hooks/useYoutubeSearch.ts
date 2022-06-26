import { useGapiContext } from "../context/GapiContext";
import { useQuery } from "react-query";
import { SearchListResponse } from "types/youtubeAPITypes";

// searchType should be a comma separated list of one or more of channels, playlist, and video (e.g. "channel,video")
// conditions specify any additional criteria that must evaluate to true before the query is executed
export const useYouTubeSearch = (searchQuery: string, searchType: string, conditions?: boolean) => {
  const { gapiClientReady } = useGapiContext();

  const { isLoading, isError, data, error, isIdle } = useQuery(['searchResults', searchQuery], async () => {
    // GAPI client will throw it's own error if there is a problem with the request, there is no need for a specific try/catch here
    const response = await gapi.client.request({
      'path': 'https://youtube.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',    // the type/nature of data returned
        q: searchQuery,    //search query
        type: searchType,   // restrict to channels only
        maxResults: 25    // max number of results per page
      }
    });

    return response.result as SearchListResponse;
  }, {
    // Check for additional conditions before formulating enabled expression. gapiClientReady must always be present
    enabled: conditions ? (conditions && gapiClientReady) : gapiClientReady,
  });

  return {
    isLoading,
    isError,
    data,
    error,
    isIdle
  }
}

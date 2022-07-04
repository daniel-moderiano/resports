import { useQuery } from "react-query";
import apiClient from "config/twitchApiClient";

// conditions specify any additional criteria that must evaluate to true before the query is executed
export const useGetTwitchVideos = (userId: string, conditions?: boolean) => {

  const { isLoading, isError, data, error } = useQuery(['twitchChannelVideos', userId], async () => {
    // The apiClient from the twurple library has internal error handling; no manual error handling is required here.
    const response = await apiClient.videos.getVideosByUser(userId);

    console.log(response);


    // * This ignores pagination at this stage
    return response.data;
  }, {
    // Check for additional conditions before formulating enabled expression. gapiClientReady must always be present, as must enableApi
    enabled: (conditions !== undefined) ? conditions : true
  });

  return {
    isLoading,
    isError,
    data,
    error,
  }
}

import { useQuery } from "react-query";
import apiClient from "config/twitchApiClient";
import { HelixChannel, HelixUser } from "@twurple/api/lib";

// * Twitch Channel ID is the same as a User ID in their ecosystem! We only need one to gather all sorts of data

export interface TwitchChannel {
  channelData: HelixChannel | null;
  userData: HelixUser | null;
  isLive?: boolean;
}

// conditions specify any additional criteria that must evaluate to true before the query is executed
export const useGetTwitchChannel = (channelId: string, conditions?: boolean) => {

  const { isLoading, isError, data, error } = useQuery(['twitchChannel', channelId], async () => {
    // The apiClient from the twurple library has internal error handling; no manual error handling is required here.
    const channelResponse = await apiClient.channels.getChannelInfoById(channelId);
    const userResponse = await apiClient.users.getUserById(channelId);

    // Create a custom combination of both responses to produce a more complete set of channel data
    const combinedData: TwitchChannel = {
      channelData: channelResponse,
      userData: userResponse,
    };

    // Determine whether the channel is live. A null 'stream' result is returned for offline channels
    if (userResponse) {
      combinedData.isLive = await userResponse.getStream() !== null;
    }

    return combinedData;
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
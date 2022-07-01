// * Use this file to declare any typings related to the YouTube API

// YouTube Snippet (a summary of the search result item)
export interface YouTubeSearchResultSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: {
      url: string,
      width?: number;
      height?: number;
    };
    medium: {
      url: string,
      width?: number;
      height?: number;
    };
    high: {
      url: string,
      width?: number;
      height?: number;
    };
  },
  channelTitle: string,
  liveBroadcastContent: string;
  publishTime?: string;
}

// Individual search result items
export interface YouTubeSearchResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  },
  snippet: YouTubeSearchResultSnippet;
}

// Result returned by the general Search: list YouTube API method
export interface YouTubeSearchListResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: YouTubeSearchResult[];
}

// Channel snippet forming part of the item returned by the Channel: list search method
export interface YouTubeChannelSearchResultSnippet {
  title: string;
  description: string;
  publishedAt: string;
  customUrl: string;
  thumbnails: {
    default: {
      url: string,
      width?: number;
      height?: number;
    };
    medium: {
      url: string,
      width?: number;
      height?: number;
    };
    high: {
      url: string,
      width?: number;
      height?: number;
    };
  },
  defaultLanguage?: string;
  country: string;
  localized: {
    title: string;
    description: string;
  }
}

// Describes an 'item' returned by the Channel: list search method
export interface YouTubeChannelSearchResult {
  kind: string;
  etag: string;
  id: string;
  snippet: YouTubeChannelSearchResultSnippet,
  statistics: {
    viewCount: string,
    subscriberCount: string,
    hiddenSubscriberCount: boolean,
    videoCount: string;
  },
  brandingSettings: {
    channel: {
      title: string,
      description: string,
      keywords?: string,
      trackingAnalyticsAccountId?: string,
      moderateComments?: boolean,
      unsubscribedTrailer?: string,
      defaultLanguage?: string,
      country: string
    },
    watch?: {
      textColor: string;
      backgroundColor: string;
      featuredPlaylistId: string;
    }
    image?: {
      bannerExternalUrl: string;
    }
  },
}


// Result returned by the Channel search: list YouTube API method
export interface YouTubeChannelSearchListResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: YouTubeChannelSearchResult[];
}
// * Use this file to declare any typings related to the YouTube API

// YouTube Snippet (a summary of the search result item)
export interface YouTubeSearchResultSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    [key: string]: {
      url: string,
      width?: number;
      height?: number;
    }
  },
  channelTitle: string,
  liveBroadcastContent: string
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

// Result returned by the Search: list YouTube API method
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
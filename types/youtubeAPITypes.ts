// * Use this file to declare any typings related to the YouTube API

// Individual search result items
export interface SearchResult {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId?: string;
    channelId?: string;
    playlistId?: string;
  },
  snippet: {
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
}

// Result returned by the Search: list YouTube API method
export interface SearchListResponse {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: SearchResult[];
}
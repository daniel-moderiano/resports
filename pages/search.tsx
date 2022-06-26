import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useGapiContext } from '../context/GapiContext';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

// Individual search result items
interface SearchResult {
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

// Returned by the Search: list YouTube API method
interface SearchListResponse {
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


// Use this to ensure searchQueries provided via the URL are in the correct format for API calls
// Exported for testing purposes
export const isValidQuery = (query: ParsedUrlQuery) => {
  if (typeof query.searchQuery === 'string') {   // covers lack of searchQuery param
    return query.searchQuery.trim() !== '';   // covers empty/whitespace strings
  }
  return false;
}

// TODO: Consider a toggle between channels/playlists/videos, or a seies or checkboxes
// TODO: Add GAPI client search request using React Query. Enable on isValidQuery check!

const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  const UrlQuery = router.query;
  // Set here to avoid constant API calls burning quota
  // const UrlQuery = {};


  const { gapiClientReady } = useGapiContext();

  const { isLoading, isError, data, error, isIdle } = useQuery(['request'], async () => {
    // GAPI client will throw it's own error if there is a problem with the request, there is no need for a specific try/catch here
    const response = await gapi.client.request({
      'path': 'https://youtube.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',    // the type/nature of data returned
        q: UrlQuery.searchQuery,    //search query
        type: 'channel',   // restrict to channels only
        maxResults: 25    // max number of results per page
      }
    });

    return response.result as SearchListResponse;
  }, {
    enabled: (gapiClientReady && isValidQuery(UrlQuery)),
  });


  useEffect(() => {
    if (data) {
      console.log('Loaded');

      console.log(data);
    }

    if (isLoading) {
      console.log('Loading...');
    }

    if (error) {
      console.log(error);
    }

    if (isIdle) {
      console.log('Awaiting client to be ready');
    }
  }, [data, isLoading, error, isIdle])

  return (
    <div>
      <h2 className="title">You searched for {isValidQuery(UrlQuery) ? UrlQuery.searchQuery : 'an invalid result'}</h2>
      {data && (
        <>
          {data.items.map((item) => (
            <div key={item.etag}>
              <h3>{item.snippet.channelTitle}</h3>
              <p>{item.snippet.description}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default Search;
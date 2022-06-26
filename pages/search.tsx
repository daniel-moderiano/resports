import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useGapiContext } from '../context/GapiContext';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

interface SearchResult {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: [];
}

// Use this to ensure searchQueries provided via the URL are in the correct format for API calls
// Exported for testing purposes
export const isValidQuery = (query: ParsedUrlQuery) => {
  if (typeof query.searchQuery === 'string') {   // covers lack of searchQuery param
    return query.searchQuery.trim() !== '';   // covers empty/whitespace strings
  }
  return false;
}


// TODO: Add GAPI client search request using React Query. Enable on isValidQuery check!

const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  const UrlQuery = router.query;

  const { gapiClientReady } = useGapiContext();

  const { isLoading, isError, data, error, isIdle } = useQuery(['request'], async () => {
    // GAPI client will throw it's own error if there is a problem with the request, there is no need for a specific try/catch here
    const response = await gapi.client.request({
      'path': 'https://youtube.googleapis.com/youtube/v3/channels',
      params: {
        id: 'UCj1J3QuIftjOq9iv_rr7Egw',
        part: 'contentDetails, snippet'
      }
    });

    return response
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
    </div>
  )
}

export default Search;
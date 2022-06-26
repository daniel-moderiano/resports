import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useGapiContext } from '../context/GapiContext';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { SearchListResponse } from "types/youtubeAPITypes";

// ! Use this variable to control whether active API calls are made
const active = false;

// Use this to ensure searchQueries provided via the URL are in the correct format for API calls
// Exported for testing purposes
export const isValidQuery = (query: ParsedUrlQuery) => {
  if (typeof query.searchQuery === 'string') {   // covers lack of searchQuery param
    return query.searchQuery.trim() !== '';   // covers empty/whitespace strings
  }
  return false;
}

// TODO: Consider a toggle between channels/playlists/videos, or a seies or checkboxes

const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  const UrlQuery = router.query;

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
    enabled: (gapiClientReady && isValidQuery(UrlQuery) && active),
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
      console.log('Awaiting conditions for API call');
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
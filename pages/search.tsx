import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useEffect } from 'react';
import { useYouTubeSearch } from "../hooks/useYoutubeSearch";

// TODO: handle search that produces no results
// TODO: Consider a toggle between channels/playlists/videos, or a seies or checkboxes

// Use this to ensure searchQueries provided via the URL are in the correct format for API calls
// Exported for testing purposes
export const isValidQuery = (query: ParsedUrlQuery) => {
  if (typeof query.searchQuery === 'string') {   // covers lack of searchQuery param
    return query.searchQuery.trim() !== '';   // covers empty/whitespace strings
  }
  return false;
}

// Provide a sanitised string input to the YouTube API hook. Default to empty string which is a 'general search', however empty string will not pass a validation check so the API should not be called regardless
export const sanitiseQuery = (query: ParsedUrlQuery) => {
  if (isValidQuery(query)) {
    // This is a safe type assertion as the valid query check has passed
    return query.searchQuery as string;
  } else {
    return '';
  }
}


const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  const UrlQuery = router.query;

  const { isLoading, isError, data, error, isIdle } = useYouTubeSearch(
    sanitiseQuery(UrlQuery),
    'channel',
    isValidQuery(UrlQuery)
  );

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
      <div>You searched for {UrlQuery.searchQuery}</div>
      {isLoading ? (<div>Loading...</div>) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default Search;

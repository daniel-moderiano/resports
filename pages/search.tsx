import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useGapiContext } from '../context/GapiContext';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { SearchListResponse } from "types/youtubeAPITypes";
import { useYouTubeSearch } from "../hooks/useYoutubeSearch";
import * as React from 'react'

// TODO: handle search that produces no results
// TODO: Attempt to pass sanitised query into youtube hook

// Use this to ensure searchQueries provided via the URL are in the correct format for API calls
// Exported for testing purposes
export const isValidQuery = (query: ParsedUrlQuery) => {
  if (typeof query.searchQuery === 'string') {   // covers lack of searchQuery param
    return query.searchQuery.trim() !== '';   // covers empty/whitespace strings
  }
  return false;
}

export const sanitiseQuery = (query: ParsedUrlQuery) => {
  if (isValidQuery(query)) {
    return query.searchQuery as string;
  }
}

// TODO: Consider a toggle between channels/playlists/videos, or a seies or checkboxes

const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  const UrlQuery = router.query;


  const { isLoading, isError, data, error, isIdle } = useYouTubeSearch(
    UrlQuery.searchQuery,
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

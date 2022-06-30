import TwitchSearchTab from "@/components/TwitchSearchTab";
import YouTubeSearchTab from "@/components/YouTubeSearchTab";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";

// * Both query functions exported for testing purposes
// Use this to ensure searchQueries provided via the URL are in the correct format for API calls
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
  const router = useRouter();
  const UrlQuery = router.query;

  const [activeTab, setActiveTab] = useState('twitch')

  // Avoid displaying the default search results page. This alleviates the need to conditionally run the API queries based on ckecking for valid queries, and ensures the sanitiseQuery func works as intended.
  if (!isValidQuery(UrlQuery)) {
    return (
      <div>That is an invalid search. Try another.</div>
    )
  }

  return (
    <div>
      <div>
        <button onClick={() => setActiveTab('twitch')}>Search Twitch</button>
        <button onClick={() => setActiveTab('youtube')}>Search YouTube</button>
      </div>
      <h2>You search for {UrlQuery.searchQuery}</h2>
      <div>
        {activeTab === 'twitch' && (
          <TwitchSearchTab searchQuery={sanitiseQuery(UrlQuery)} />
        )}
        {activeTab === 'youtube' && (
          <YouTubeSearchTab searchQuery={sanitiseQuery(UrlQuery)} />
        )}
      </div>
    </div>
  )
}

export default Search;


import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

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


  return (
    <div>
      Search page. Tabs to be added.
    </div>
  )
}

export default Search;


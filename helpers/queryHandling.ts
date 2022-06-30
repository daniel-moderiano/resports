import { ParsedUrlQuery } from "querystring";
// These functions exist to help handle URL Query params relating to searching for channels/videos/etc.

// Use this to ensure searchQueries provided via a URL are in the correct format for API calls
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
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  const UrlQuery = router.query;

  // Use this to ensure that both whitespace/empty queries and queries without 'searchQuery' property are rejected
  const isValidQuery = (query: ParsedUrlQuery) => {
    if (typeof query.searchQuery === 'string') {   // covers lack of searchQuery key, as well as empty string for query
      return query.searchQuery.trim() !== '';
    }

    return false;
  }

  return (
    <div>
      <h2 className="title">You searched for {isValidQuery(UrlQuery) ? UrlQuery.searchQuery : 'an invalid result'}</h2>
    </div>
  )
}

export default Search;
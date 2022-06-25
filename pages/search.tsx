import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  const UrlQuery = router.query;

  const isValidQuery = (query: ParsedUrlQuery) => {
    // Check for presence of correct search param
    if (!query.searchQuery) {   // this will also include a blank search query!
      return false
    }
    return true;
  }

  return (
    <div>
      <h2>You searched for {isValidQuery(UrlQuery) ? UrlQuery.searchQuery : 'an invalid result'}</h2>
    </div>
  )
}

export default Search;
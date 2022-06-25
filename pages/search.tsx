import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

const Search = () => {
  // Extract the query params in object form
  const router = useRouter();
  console.log(router);

  const UrlQuery = router.query;

  // Use this to ensure that both whitespace/empty queries and queries without 'searchQuery' property are rejected
  const isValidQuery = (query: ParsedUrlQuery) => query.searchQuery ? true : false;

  return (
    <div>
      <h2>You searched for {isValidQuery(UrlQuery) ? UrlQuery.searchQuery : 'an invalid result'}</h2>
    </div>
  )
}

export default Search;
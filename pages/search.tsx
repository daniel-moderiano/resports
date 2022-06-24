import { useRouter } from "next/router"

const Search = () => {
  // Extract the query params in object form
  const router = useRouter()
  console.log(router.query);

  return (
    <div>
      <h2>Search Results</h2>
    </div>
  )
}

export default Search
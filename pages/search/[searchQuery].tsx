import { useRouter } from 'next/router'
import React from 'react'

const Search = () => {
  const router = useRouter();
  const { searchQuery } = router.query;

  return (
    <div>Search: {searchQuery}</div>
  )
}

export default Search
import React, { useState } from 'react'
import Link from 'next/link'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  return (
    <div>
      <label htmlFor="search">
        <input type="text" id="search" placeholder='Search channels' onChange={handleChange} value={searchQuery} />
      </label>
      <Link href="/search-results">
        <a>Search</a>
      </Link>
    </div>

  )
}

export default SearchBar
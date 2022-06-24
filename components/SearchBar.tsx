import React, { useState } from 'react'
import Link from 'next/link'

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleSearch = () => {
    console.log(searchQuery);
  }

  return (
    <div>
      <label htmlFor="search">
        <input type="text" id="search" placeholder='Search channels' onChange={handleChange} value={searchQuery} />
      </label>
      <Link href={`/search/${searchQuery}`}>
        <a onClick={handleSearch}>Search</a>
      </Link>
    </div>

  )
}

export default SearchBar
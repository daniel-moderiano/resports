import React, { useState } from 'react'
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  const handleClick = () => {
    // Router.push returns a promise, but this is an odd choice, and at this change there is no intention of awaiting this promise for handling. The void keyword indicates this choice
    void router.push({ pathname: '/search', query: { searchQuery } })
  }

  return (
    <div>
      <label htmlFor="search">
        <input
          type="text"
          id="search"
          placeholder='Search channels'
          onChange={handleChange}
          value={searchQuery}
        />
      </label>
      <button
        onClick={handleClick}
        disabled={searchQuery.trim() === ''}>
        Search
      </button>
    </div>
  )
}

export default SearchBar
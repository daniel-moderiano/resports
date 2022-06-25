import React, { useState } from 'react'
import { useRouter } from 'next/router';

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  }

  // used whenever the user clicks the search button
  const handleClick = () => {
    console.log(searchQuery);
    router.push({ pathname: '/search', query: { searchQuery } }).then(() => {
      console.log('Successfully redirected');
    }).catch(() => {
      console.log('Error occurred');
    })
  }


  return (
    <div>
      <label htmlFor="search">
        <input type="text" id="search" placeholder='Search channels' onChange={handleChange} value={searchQuery} />
      </label>
      <button onClick={handleClick} disabled={searchQuery.trim() === ''}>Search</button>
    </div>

  )
}

export default SearchBar
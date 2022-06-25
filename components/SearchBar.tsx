import React, { useState } from 'react'
import { useRouter } from 'next/router';
import styles from '../styles/componentStyles/SearchBar.module.css'

// TODO: Add search icon instead of text 'search'
// TODO: Add custom disabled styles that replicate normal btn, but with 'stop sign' cursor

// This component is expected to live in the header and remain visible from all pages of the application
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
      <label htmlFor="search" className={styles.label}>Search</label>
      <input
        type="text"
        id="search"
        placeholder='Search channels'
        onChange={handleChange}
        value={searchQuery}
        spellCheck="false"
        autoCorrect="false"
        autoComplete="false"
      />
      <button
        onClick={handleClick}
        disabled={searchQuery.trim() === ''}>
        Search
      </button>
    </div>
  )
}

export default SearchBar
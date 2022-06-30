// ! This file has been left here as an example of how to mock useRouter

import { render, screen } from '@testing-library/react';
import Search from '../pages/search';
import { useRouter } from "next/router";

// Use in conjunction with setSearchQuery function to set custom search queries to test handling of different queries
interface UrlQuery {
  searchQuery?: string;
}

// Globally mock the next router and useRouter hook. You must provide a custom mockImplementation in each test that uses the router however!
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// Use in individual tests to provide a custom searchQuery for the component/page to handle
const setSearchQuery = (query: UrlQuery) => {
  (useRouter as jest.Mock).mockImplementation(() => ({ query }));
}


describe('Search results page', () => {
  describe('Search query handling', () => {
    it('recognises empty search query as invalid', () => {
      setSearchQuery({ searchQuery: '' })
      render(<Search />)
      const msg = screen.getByText(/invalid/i);
      expect(msg).toBeInTheDocument()
    });

    it('recognises whitespace search query as invalid', () => {
      setSearchQuery({ searchQuery: '   ' })
      render(<Search />)
      const msg = screen.getByText(/invalid/i);
      expect(msg).toBeInTheDocument()
    });

    it('recognises lack of searchQuery param as invalid', () => {
      setSearchQuery({})
      render(<Search />)
      const msg = screen.getByText(/invalid/i);
      expect(msg).toBeInTheDocument()
    });

    it('recognises valid search queries and extracts search term', () => {
      setSearchQuery({ searchQuery: 'hello' })
      render(<Search />)
      const msg = screen.getByText(/hello/i);
      expect(msg).toBeInTheDocument()
    });
  })
})

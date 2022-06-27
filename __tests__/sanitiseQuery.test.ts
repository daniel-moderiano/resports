import { sanitiseQuery } from '../pages/search'

describe('Search query sanitisation', () => {
  it('returns empty string for invalid search queries', () => {
    expect(sanitiseQuery({ term: 'test' })).toBe('')
  });

  it('returns the search query when it is valid', () => {
    expect(sanitiseQuery({ searchQuery: 'test' })).toBe('test')
  });
});

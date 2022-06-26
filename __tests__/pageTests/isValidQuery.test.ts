import { isValidQuery } from '../../pages/search'

describe('Search query handling', () => {
  it('recognises empty search query as invalid', () => {
    expect(isValidQuery({ searchQuery: '' })).toBe(false)
  });

  it('recognises whitespace search query as invalid', () => {
    expect(isValidQuery({ searchQuery: '   ' })).toBe(false)
  });

  it('recognises lack of searchQuery param as invalid', () => {
    expect(isValidQuery({})).toBe(false)
  });

  it('recognises valid search query', () => {
    expect(isValidQuery({ searchQuery: 'hello' })).toBe(true)
  });
})

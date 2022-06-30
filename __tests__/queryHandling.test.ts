import { sanitiseQuery, isValidQuery } from "../helpers/queryHandling";

describe('Checking query validity', () => {
  it('recognises empty search query as invalid', () => {
    expect(isValidQuery({ searchQuery: '' })).toBe(false)
  });

  it('recognises whitespace search query as invalid', () => {
    expect(isValidQuery({ searchQuery: '   ' })).toBe(false)
  });

  it('recognises lack of searchQuery param as invalid', () => {
    expect(isValidQuery({})).toBe(false)
  });

  it('recognises array of searchQuery params as invalid', () => {
    expect(isValidQuery({ searchQuery: ['hello', 'test'] })).toBe(false)
  });

  it('recognises multiple param query as invalid if searchQuery is not present', () => {
    expect(isValidQuery({ one: 'hello', two: 'true' })).toBe(false)
  });

  it('recognises multiple param query as valid as long as searchQuery is included', () => {
    expect(isValidQuery({ searchQuery: 'hello', term: 'true' })).toBe(true)
  });

  it('recognises valid search query', () => {
    expect(isValidQuery({ searchQuery: 'hello' })).toBe(true)
  });
})


describe('Performing search query sanitisation', () => {
  it('returns empty string for invalid search queries', () => {
    expect(sanitiseQuery({ term: 'test' })).toBe('')
  });

  it('returns the search query when it is valid', () => {
    expect(sanitiseQuery({ searchQuery: 'test' })).toBe('test')
  });
});

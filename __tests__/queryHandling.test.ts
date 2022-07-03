import { sanitiseSearchQuery, isValidSearchQuery, sanitiseChannelQuery, isValidChannelQuery } from "../helpers/queryHandling";

describe('Checking search query validity', () => {
  it('recognises empty search query as invalid', () => {
    expect(isValidSearchQuery({ searchQuery: '' })).toBe(false)
  });

  it('recognises whitespace search query as invalid', () => {
    expect(isValidSearchQuery({ searchQuery: '   ' })).toBe(false)
  });

  it('recognises lack of searchQuery param as invalid', () => {
    expect(isValidSearchQuery({})).toBe(false)
  });

  it('recognises array of searchQuery params as invalid', () => {
    expect(isValidSearchQuery({ searchQuery: ['hello', 'test'] })).toBe(false)
  });

  it('recognises multiple param query as invalid if searchQuery is not present', () => {
    expect(isValidSearchQuery({ one: 'hello', two: 'true' })).toBe(false)
  });

  it('recognises multiple param query as valid as long as searchQuery is included', () => {
    expect(isValidSearchQuery({ searchQuery: 'hello', term: 'true' })).toBe(true)
  });

  it('recognises valid search query', () => {
    expect(isValidSearchQuery({ searchQuery: 'hello' })).toBe(true)
  });
})


describe('Performing search query sanitisation', () => {
  it('returns empty string for invalid search queries', () => {
    expect(sanitiseSearchQuery({ term: 'test' })).toBe('')
  });

  it('returns the search query when it is valid', () => {
    expect(sanitiseSearchQuery({ searchQuery: 'test' })).toBe('test')
  });
});


describe('Checking channel ID query validity', () => {
  it('recognises empty search query as invalid', () => {
    expect(isValidChannelQuery({ channelId: '' })).toBe(false)
  });

  it('recognises whitespace search query as invalid', () => {
    expect(isValidChannelQuery({ channelId: '   ' })).toBe(false)
  });

  it('recognises lack of searchQuery param as invalid', () => {
    expect(isValidChannelQuery({})).toBe(false)
  });

  it('recognises array of searchQuery params as invalid', () => {
    expect(isValidChannelQuery({ channelId: ['1234', 'test'] })).toBe(false)
  });

  it('recognises multiple param query as invalid if searchQuery is not present', () => {
    expect(isValidChannelQuery({ one: 'hello', two: 'true' })).toBe(false)
  });

  it('recognises multiple param query as valid as long as searchQuery is included', () => {
    expect(isValidChannelQuery({ channelId: '1234', term: 'true' })).toBe(true)
  });

  it('recognises valid search query', () => {
    expect(isValidChannelQuery({ channelId: '1234' })).toBe(true)
  });
})


describe('Performing channel ID query sanitisation', () => {
  it('returns empty string for invalid channel IDs', () => {
    expect(sanitiseChannelQuery({ term: 'test' })).toBe('')
  });

  it('returns the channel ID when it is valid', () => {
    expect(sanitiseChannelQuery({ channelId: '1234' })).toBe('1234')
  });
});

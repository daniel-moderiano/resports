import { render, screen } from '@testing-library/react'
import TwitchSearchTab from '../../components/TwitchSearchTab';

jest.mock('../../hooks/useTwitchSearch', () => ({
  useTwitchSearch: () => ({
    isLoading: false,
    isError: false,
    data: false,
    error: false,
    isIdle: false
  }),
}));

describe('Twitch search tab component', () => {
  it("Renders the component", () => {
    render(<TwitchSearchTab searchQuery='gaming' isValidSearch={true} />)
    const test = screen.getByText(/you searched for/i)
    expect(test).toBeInTheDocument();
  });

  it('Renders loading UI while data is loading', () => {

  });

  it('Renders error message when an API error occurs', () => {

  });

  it('Renders error message when user does not provide a valid search query', () => {

  });

  it('Renders custom message for searches that return no results', () => {

  });
});

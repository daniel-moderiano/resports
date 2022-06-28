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
    render(<TwitchSearchTab searchQuery='gaming' />)
    const test = screen.getByText(/you searched for/i)
    expect(test).toBeInTheDocument();
  });
});

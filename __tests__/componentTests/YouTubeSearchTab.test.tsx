import { render, screen } from '@testing-library/react'
import YouTubeSearchTab from '../../components/YouTubeSearchTab';

jest.mock('../../hooks/useYoutubeSearch', () => ({
  useYouTubeSearch: () => ({
    isLoading: false,
    isError: false,
    data: false,
    error: false,
    isIdle: false
  }),
}));

describe('YouTube search tab component', () => {
  it("Renders the component", () => {
    render(<YouTubeSearchTab searchQuery='gaming' isValidSearch={true} />)
    const test = screen.getByText(/you searched for/i)
    expect(test).toBeInTheDocument();
  });
});
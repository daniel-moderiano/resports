import { render, screen } from '@testing-library/react'
import TwitchChannelVideos from '../../components/TwitchChannelVideos'

describe('Twitch search tab component', () => {
  it('Renders only loading UI while data is loading', () => {
    mockSearch.isLoading = true;
    render(<TwitchChannelVideos searchQuery='gaming' />)

    // Check error UI is not present
    const error = screen.queryByText(/error/i)
    expect(error).not.toBeInTheDocument();

    // Check for loading UI
    const loading = screen.getByText(/loading/i)
    expect(loading).toBeInTheDocument();
  });

  it('Renders only error message when an API error occurs', () => {
    mockSearch.isError = true;
    mockSearch.isLoading = false;
    render(<TwitchChannelVideos searchQuery='gaming' />)

    // Check that loading UI is not present
    const loading = screen.queryByText(/loading/i)
    expect(loading).not.toBeInTheDocument();

    // Check for error UI
    const error = screen.getByText(/error/i)
    expect(error).toBeInTheDocument();
  });

  it('Renders data correctly (no loaders/error UI present)', () => {
    mockSearch.isError = false;
    mockSearch.isLoading = false;
    mockSearch.data = testData;
    render(<TwitchChannelVideos searchQuery='gaming' />)

    // Check that loading UI is not present
    const loading = screen.queryByText(/loading/i)
    expect(loading).not.toBeInTheDocument();

    // Check that API error UI is not present
    const error = screen.queryByText(/error/i)
    expect(error).not.toBeInTheDocument();

    // Check that invalid message UI is not present
    const invalid = screen.queryByText(/invalid/i)
    expect(invalid).not.toBeInTheDocument();

    // Check that data has been rendered
    const searchResults = screen.getAllByRole('img');
    expect(searchResults).toHaveLength(2);
  });

  it('Renders custom message for searches that return no results', () => {
    mockSearch.isError = false;
    mockSearch.isLoading = false;
    // This data does not contain any channel items
    mockSearch.data = [];
    render(<TwitchChannelVideos searchQuery='gaming' />)
    const test = screen.getByText(/no results/i)
    expect(test).toBeInTheDocument();
  });
});

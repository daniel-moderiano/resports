import { render, screen } from '@testing-library/react'
import SearchBar from '../../components/SearchBar'
import userEvent from '@testing-library/user-event';

describe('Search bar component', () => {
  it('Shows "search channels" placeholder by default', () => {
    render(<SearchBar />)
    const input = screen.getByPlaceholderText(/search channels/i);
    expect(input).toBeInTheDocument();
  });

  it('Updates input UI when user types text', async () => {
    render(<SearchBar />)
    const input: HTMLInputElement = screen.getByPlaceholderText(/search channels/i);
    await userEvent.type(input, 'test');
    expect(input.value).toBe('test');
  })
})

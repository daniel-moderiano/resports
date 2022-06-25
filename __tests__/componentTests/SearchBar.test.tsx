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
  });

  it('disables search btn when search query is empty', () => {
    render(<SearchBar />)
    const btn: HTMLButtonElement = screen.getByRole('button', { name: /search/i });
    expect(btn).toHaveAttribute('disabled');
  });

  it('disables search btn when search query is whitespace only', async () => {
    render(<SearchBar />)
    const btn: HTMLButtonElement = screen.getByRole('button', { name: /search/i });
    const input: HTMLInputElement = screen.getByPlaceholderText(/search channels/i);
    await userEvent.type(input, '   ');
    expect(btn).toHaveAttribute('disabled');
  });

  it('enables search btn when search query is valid (non-whitespace)', async () => {
    render(<SearchBar />)
    const btn: HTMLButtonElement = screen.getByRole('button', { name: /search/i });
    const input: HTMLInputElement = screen.getByPlaceholderText(/search channels/i);
    await userEvent.type(input, 'hello');
    expect(btn).not.toHaveAttribute('disabled');
  })
})

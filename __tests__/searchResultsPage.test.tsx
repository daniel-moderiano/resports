import { render, screen } from '@testing-library/react'
import SearchResults from '../pages/searchResults';

describe('Home', () => {
  it('renders a link', () => {
    render(<SearchResults />)

    const heading = screen.getByRole('heading', {
      name: /search results/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

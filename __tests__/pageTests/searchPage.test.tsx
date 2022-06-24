import { render, screen } from '@testing-library/react'
import Search from '../../pages/search';

describe('Home', () => {
  it('renders a link', () => {
    render(<Search />)

    const heading = screen.getByRole('heading', {
      name: /search results/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

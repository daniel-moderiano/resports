import { render, screen } from '@testing-library/react'
import Results from '../../pages/results';

describe('Home', () => {
  it('renders a link', () => {
    render(<Results />)

    const heading = screen.getByRole('heading', {
      name: /search results/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

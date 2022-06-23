import { render, screen } from '@testing-library/react';
import Watch from '../../pages/watch';

describe('Watch page', () => {
  it('renders a heading', () => {
    render(<Watch />)

    const heading = screen.getByRole('heading', {
      name: /watch/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react';
import Channel from '../../pages/channel';

describe('Channel page', () => {
  it('renders a heading', () => {
    render(<Channel />)

    const heading = screen.getByRole('heading', {
      name: /channel/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

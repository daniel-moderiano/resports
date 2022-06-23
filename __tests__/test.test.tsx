import { render, screen } from '@testing-library/react'
import TestPage from '../pages/testPage';

describe('Home', () => {
  it('renders a link', () => {
    render(<TestPage />)

    const link = screen.getByRole('link', {
      name: /home/i,
    })

    expect(link).toBeInTheDocument()
  })
})

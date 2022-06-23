import { render, screen } from '@testing-library/react'
import Layout from '../components/layout/Layout';

describe('Layout component', () => {
  it('renders children elements', () => {
    render(
      <Layout>
        <h2>child</h2>
      </Layout>
    )

    const heading = screen.getByRole('heading', {
      name: /child/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

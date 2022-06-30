import { render, screen } from '@testing-library/react';
import Channel from '../../pages/channel/[channelId]';
import { useRouter } from 'next/router';

// Globally mock the next router and useRouter hook. This mock prevents an reference error when the component attempts to read the router.query object from useRouter
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// Use this in individual tests to provide a custom searchQuery for the component/page to handle
const setSearchQuery = (query: Record<string, unknown>) => {
  (useRouter as jest.Mock).mockImplementation(() => ({ query }));
}

describe('Channel page', () => {
  it('renders a heading', () => {
    setSearchQuery({ channelId: '1234' })
    render(<Channel />)

    const heading = screen.getByRole('heading', {
      name: /channel/i,
    })

    expect(heading).toBeInTheDocument()
  })
})

import { render, screen } from '@testing-library/react';
import Search from '../../pages/search';
import userEvent from '@testing-library/user-event';

// Globally mock the next router and useRouter hook. We are not concerned about custom searchQueries in these tests, so a single value is set globally.
// This mock prevents an reference error when the component attempts to read the router.query object from useRouter
jest.mock("next/router", () => ({
  __esModule: true,
  useRouter: jest.fn(() => ({ searchQuery: 'test' })),
}));

// TODO: Add search tab hook mocks to avoid errors


describe('Search results page', () => {
  describe('Tab switching logic', () => {
    it('Displays tab buttons for both platforms', () => {
      render(<Search />)
      const youtubeButton = screen.getByText(/search youtube/i);
      const twitchButton = screen.getByText(/search twitch/i);
      expect(youtubeButton).toBeInTheDocument()
      expect(twitchButton).toBeInTheDocument()
    });

    it('Displays Twitch tab active by default', () => {
      render(<Search />)
      const twitchTab = screen.getByText(/twitch tab/i);
      expect(twitchTab).toBeInTheDocument()
    });

    it('Hides YouTube tab by default', () => {
      render(<Search />)
      const youtubeTab = screen.queryByText(/youtube tab/i);
      expect(youtubeTab).not.toBeInTheDocument()
    });

    it('Switches platform tabs when tab switcher is clicked', async () => {
      render(<Search />)
      const youtubeButton = screen.getByText(/search youtube/i);

      // Switch tabs here
      await userEvent.click(youtubeButton);
      const youtubeTab = screen.getByText(/youtube tab/i);
      expect(youtubeTab).toBeInTheDocument();
    });
  });
})

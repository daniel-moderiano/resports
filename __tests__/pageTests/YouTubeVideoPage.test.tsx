import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import YouTubeVideo from '../../pages/youtubeVideo/[videoId]';


describe('Channel page layout and elements', () => {
  it('Renders custom mode by default', () => {
    render(<YouTubeVideo videoId='1234' />);
    const customMode = screen.getByText(/custom player/i);
    expect(customMode).toBeInTheDocument();
  });
});



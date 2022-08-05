import { render, screen } from '@testing-library/react'
import YouTubePlayer from '../../components/YouTubePlayer';

// Provide channel data and other UI states via this mock of the channel search API call
jest.mock('../../hooks/useYouTubeIframe', () => ({
  useYouTubeIframe: () => ({})
}));

describe('YouTube player styling and toggles', () => {
  it('Begins in normal (non-theater) mode', () => {
    render(<YouTubePlayer videoId='1234' />)
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveClass('wrapperNormal');
    expect(wrapper).not.toHaveClass('wrapperTheater');
  });
});

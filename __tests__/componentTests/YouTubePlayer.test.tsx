import { render, screen } from '@testing-library/react'
import YouTubePlayer from '../../components/YouTubePlayer';

describe('YouTube player styling and toggles', () => {
  it('Begins in normal (non-theater) mode', () => {
    render(<YouTubePlayer />)
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveClass('wrapperNormal');
  })
})

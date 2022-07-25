import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import YouTubePlayer from '../../components/YouTubePlayer';

describe('YouTube player styling and toggles', () => {
  it('Begins in normal (non-theater) mode', () => {
    render(<YouTubePlayer playerReady={true} />)
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveClass('wrapperNormal');
    expect(wrapper).not.toHaveClass('wrapperTheater');
  });

  it('Toggles theater mode on button click', async () => {
    render(<YouTubePlayer playerReady={true} />)
    const wrapper = screen.getByTestId('wrapper');
    const btn = screen.getByRole('button', { name: /theater/i })

    // Switch to theater mode
    await userEvent.click(btn);

    expect(wrapper).not.toHaveClass('wrapperNormal');
    expect(wrapper).toHaveClass('wrapperTheater');
  });

  it('Toggles back to normal mode on subsequent button click', async () => {
    render(<YouTubePlayer playerReady={true} />)
    const wrapper = screen.getByTestId('wrapper');
    const btn = screen.getByRole('button', { name: /theater/i })

    // Switch to theater mode, then switch back
    await userEvent.click(btn);
    await userEvent.click(btn);

    expect(wrapper).toHaveClass('wrapperNormal');
    expect(wrapper).not.toHaveClass('wrapperTheater');
  });
});

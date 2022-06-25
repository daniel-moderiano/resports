import { getPage } from 'next-page-tester';
import { screen } from '@testing-library/react';


describe('Search page', () => {
  it('renders search page', async () => {
    const { render } = await getPage({
      route: '/search',
    });

    render();
    expect(screen.getByText('Search page')).toBeInTheDocument();
  });
});
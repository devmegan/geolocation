import { render, screen } from '@testing-library/react';
import Description from '../Description';

describe('description', () => {
  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<Description />);

    expect(view).toMatchSnapshot();
  });

  it('renders coordinates', () => {
    expect.hasAssertions();

    const view = render(<Description coords="1, 2" />);

    expect(screen.getByText('1, 2')).toBeInTheDocument();
  });
});

import { render } from '@testing-library/react';
import Nav from '../Nav';

describe('nav', () => {
  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<Nav />);
    
    expect(view).toMatchSnapshot();
  });
})

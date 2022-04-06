import { render } from '@testing-library/react';
import AccuracyToggle from '../AccuracyToggle';

describe('accuracyToggle', () => {
  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<AccuracyToggle />);
    
    expect(view).toMatchSnapshot();
  });
});

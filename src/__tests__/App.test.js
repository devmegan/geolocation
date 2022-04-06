import { render } from '@testing-library/react';
import App from '../App';

describe('app', () => {
  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<App />);
    
    expect(view).toMatchSnapshot();
  });
})

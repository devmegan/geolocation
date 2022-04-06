import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Error from '../Error';

const errorFn = jest.fn();

describe('error', () => {
  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<Error />);
    
    expect(view).toMatchSnapshot();
  });

  it('hides error on click', () => {
    expect.hasAssertions();

    render(<Error setError={errorFn}/>);

    userEvent.click(screen.getByRole('button'));

    expect(screen.queryByRole('alert')).toBeInTheDocument();
    expect(errorFn).toHaveBeenCalledWith(false);
  });
});

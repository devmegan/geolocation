import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Hero from '../Hero';

describe('hero', () => {
  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const view = render(<Hero />);
    
    expect(view).toMatchSnapshot();
  });

  it('renders location component on click', () => {
    expect.hasAssertions();

    const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        clearWatch: jest.fn(),
        watchPosition: jest.fn(),
    };

    global.navigator.geolocation = mockGeolocation;

    render(<Hero />);

    userEvent.click(screen.getByRole('button'));
    
    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalledTimes(1);
  });

  it('renders error alert on geolocation error', () => {
    expect.hasAssertions();

    const mockGeolocation = {
        getCurrentPosition: (onChange, onError) =>
            onError(new Error('User denied Geolocation')),

        clearWatch: jest.fn(),
        watchPosition: jest.fn(),
    };

    global.navigator.geolocation = mockGeolocation;

    render(<Hero />);

    userEvent.click(screen.getByRole('button'));

    expect(screen.getByRole('alert')).toBeInTheDocument();
    expect(screen.getByRole('alert')).toHaveTextContent('User denied Geolocation');
  });

  it('removes error alert on successful geolocation response', () => {
    expect.hasAssertions();

    const mockGeolocationError = {
        getCurrentPosition: (onChange, onError) =>
            onError(new Error('User denied Geolocation')),

        clearWatch: jest.fn(),
        watchPosition: jest.fn(),
    };

    const mockGeolocationSuccess = {
        getCurrentPosition: jest.fn().mockImplementationOnce((success) =>
            Promise.resolve(
                success({
                    coords: {
                        latitude: 51.1,
                        longitude: 45.3,
                    },
                })
            )
        ),

        clearWatch: jest.fn(),
        watchPosition: jest.fn(),
    };

    global.navigator.geolocation = mockGeolocationError;

    render(<Hero />);
    
    const locationBtn = screen.getByRole('button');
    userEvent.click(locationBtn);

    expect(screen.getByRole('alert')).toBeInTheDocument();

    global.navigator.geolocation = mockGeolocationSuccess;

    userEvent.click(locationBtn);

    expect(screen.queryByRole('alert')).not.toBeInTheDocument();
  });
});

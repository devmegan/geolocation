import { render } from '@testing-library/react';
import Location from '../Location';

const geolocationFn = jest.fn();

describe('location', () => {
  it('renders w/o crashing', () => {
    expect.hasAssertions();

    const mockGeolocation = {
        getCurrentPosition: jest.fn(),
        clearWatch: jest.fn(),
        watchPosition: jest.fn(),
    };

    global.navigator.geolocation = mockGeolocation;

    const view = render(<Location handleGeolocation={geolocationFn}/>);

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalled();
    expect(view).toMatchSnapshot();
  });

  it('handles use-geolocation response', () => {
    expect.hasAssertions();

    const mockGeolocation = {
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

    global.navigator.geolocation = mockGeolocation;

    const view = render(
        <Location handleGeolocation={geolocationFn} />
    );

    expect(mockGeolocation.getCurrentPosition).toHaveBeenCalledTimes(1);

    expect(geolocationFn).toHaveBeenCalledWith({
        loading: false,
        latitude: 51.1,
        longitude: 45.3,
    });

    expect(view).toMatchSnapshot();
  })

})

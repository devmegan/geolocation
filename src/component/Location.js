import { useEffect } from "react";
import { useGeolocation } from 'react-use';

export default function Geolocation({ handleGeolocation, options }) {
    const geolocation = useGeolocation(options);

    useEffect(() => {
        if (geolocation && !geolocation.loading) {
            handleGeolocation(geolocation);
        }
    }, [handleGeolocation, geolocation]);

    return null;
}
import { useState } from "react";

import Description from "./Description";
import Error from "./Error";
import Geolocation from "./Location";

export default function Hero() {

    const [error, setError] = useState(false);
    const [getCoords, setGetCoords] = useState(false);
    const [coords, setCoords] = useState(false);
  
    const handleGeolocation = (geodata) => {
      setGetCoords(false);
      setCoords(false);
      
      if (geodata.error) {
        setError(geodata.error.message);
      } else {
        if (error) {
          setError(false);
        }
        setCoords(`${geodata.latitude}, ${geodata.longitude}`);
        }
    }
  
    const handleClick = () => {
      setGetCoords(true);
    }   

    return (
        <>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <Description coords={coords} />
                <button 
                  className="btn btn-primary btn-wide" 
                  onClick={handleClick}
                >
                  Get Location
                </button>
                {error && <Error error={error} setError={setError} />}
              </div>
            </div>
          </div>
          {getCoords && <Geolocation handleGeolocation={handleGeolocation}/>}
        </>
    )
}
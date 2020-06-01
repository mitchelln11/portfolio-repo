import React, { useState, useEffect } from 'react';

const StationCoords = () => {
    let [coords, setCoords] = useState([]);

    useEffect(() => {
        const fetchCoords = async () => {
            const url = "https://api.open-notify.org/iss-now.json";
            
            const response = await fetch(url);
            coords = await response.json();
            setCoords(coords.iss_position);
        }
        fetchCoords();

        const coordsInterval = setInterval(() => {
            fetchCoords();
        }, 5000);
        return () => clearInterval(coordsInterval); // Unmounting???

    }, []);

    return (
        <div className="coordinates">
            <h4>ISS Location: </h4>
            <p>Latitude: <strong>{coords.latitude}</strong> Longitude: <strong>{coords.longitude}</strong></p>
        </div>
    )
}

export default StationCoords;
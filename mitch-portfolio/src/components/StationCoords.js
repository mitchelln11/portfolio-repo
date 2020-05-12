import React, { useState, useEffect } from 'react';

const StationCoords = () => {

    let [coords, setCoords] = useState([]);

    useEffect(() => {
        const fetchCoords = async () => {
            const url = "http://api.open-notify.org/iss-now.json";
            
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

    // // Set timer for updating image
    // useEffect(() => {
    //     const coordsInterval = setInterval(() => {
    //         fetchCoords();
    //     }, 1000);
    //     return () => clearInterval(coordsInterval); // Unmounting???
    // }, []); // Run every time the index changes

    return (
        <div className="coordinates">
            <h4>ISS Location: </h4>
            <p>Latitude: <strong>{coords.latitude}</strong>, Longitude: <strong>{coords.longitude}</strong></p>
        </div>
    )
}

export default StationCoords;
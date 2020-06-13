import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KelvinConvert from './MathConversions';

const LocalWeather = () => {
    const [openWeather, setWeather] = useState({});
    //const [temperature, setTemperature] = useState([]);

    useEffect(() => {
        axiosGet();
    }, []); //  Run once on load

    const axiosGet = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Menomonee Falls,us&APPID=${process.env.REACT_APP_WEATHER_KEY}`)
        .then(data => setWeather(data.data))
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <ul id="weather-container">
            {/* Have to use the following for nested objects for some reason. */}
            <KelvinConvert kelvin={openWeather?.main?.temp} />
            <li>{openWeather?.weather?.[0].main}</li>
            <li>{openWeather.name}</li>
        </ul>
    );
}

export default LocalWeather;
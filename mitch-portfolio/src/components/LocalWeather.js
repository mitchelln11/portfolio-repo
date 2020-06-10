import React, { useState, useEffect } from 'react';
import axios from 'axios';
//require('dotenv').config;
//import {KelvinConvert} from './MathConversions';

const LocalWeather = () => {
    const [openWeather, setWeather] = useState({});

    useEffect(() => {
        axiosGet();
    }, []); //  Run once on load

    const axiosGet = () => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Menomonee Falls,us&APPID=${process.env.REACT_APP_WEATHER_KEY}`)
        .then(data => setWeather(data.data));
    }

    return (
        <ul id="weather-container">
            <li>
                <ul>
                {/* Have to use the following for nested objects for some reason. */}
                    <li>{openWeather.main && openWeather.main.temp}&deg;F</li>
                    <li>{openWeather.weather && openWeather.weather[0].main}</li>
                </ul>
            </li>
            <li>{openWeather.name}</li>
        </ul>
    );
}

export default LocalWeather;
import React from 'react';
import LocalWeather from './LocalWeather';

const headerBlock = () => {
    return (
        <div className="header-overlay">
            <h1>Mitchell Naleid</h1><h2>Web Developer</h2>
            <LocalWeather />
        </div>
    )
}

export default headerBlock;
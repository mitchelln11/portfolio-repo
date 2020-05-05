import React, { useState } from 'react';

function Carousel() {

    const [slides] = useState([
        {
            source: "../images/half-moon-pier.jpg",
            title: "Half Moon Pier"
        },
        {
            source: "../images/port-washington-rocks.jpg",
            title: "Port Washington Rocks"
        },
        {
            source: "../images/abandoned-rail.jpg",
            title: "Abandoned Rail"
        }
    ]);

    let indexValue = 0; // Initial slide index value
    let currentSlide = slides[indexValue]; // variable index value we can reference later

    // Index value moves up, but doesn't update the image. Why???
    const arrowRightClick = () => {
        currentSlide = slides[indexValue + 1];
        console.log(currentSlide);
    }



    return (
        <div className="carousel-block">
            <div className="flex-container">
                <div id="slider">
                    <div className="slide">
                        <img src={currentSlide.source} alt={currentSlide.title} title={currentSlide.title} className="slider-img" />
                        <div className="arrows">
                            <div id="arrow-left"><i className="fas fa-arrow-alt-circle-left"></i></div>
                            <div id="arrow-right" onClick={arrowRightClick}><i className="fas fa-arrow-alt-circle-right"></i></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Carousel;
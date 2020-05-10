import React, { useState, useEffect } from 'react';

function ToLearn() {
    let [items, setItems] = useState([]);
    
    // SET CAROUSEL DEFAULTS
    let [currentIndex, setCurrentIndex] = useState(0); // Initial slide index value
    let currentLogo = items[currentIndex]; // variable index value we can reference later 
    
    // Make API call
    useEffect(() => {
        const fetchItems = async () => {
            const url = "http://localhost:3002/learn";
            const response = await fetch(url);
            items = await response.json();
            setItems(items);
        }
        fetchItems();
    }, []);

    // Set timer for updating image
    useEffect(() => {
        const imgInterval = setInterval(() => {
            currentIndex !== items.length -1 ? // Check index length
            setCurrentIndex(currentIndex + 1) : setCurrentIndex(currentIndex = 0);
            currentLogo = items[currentIndex];
        }, 8000);
        return () => clearInterval(imgInterval); // Unmounting???
    }, [currentIndex]); // Run every time the index changes

    // Return will run through once before it makes the fetch call, so it will be null. After the component mounts, values will come in.
    if (!items.length) {
        return null;
    }

    return (
        <div className="flex-child languages">
            <h2>Languages to Learn</h2>
            <div className="logo-parent">
                <div className="img-container">
                <img src={currentLogo.source} alt={currentLogo.title} title={currentLogo.title}  className="img-fluid mx-auto d-block" />
                </div>
                <h4 className="text-center">{currentLogo.title}</h4>
            </div>
            <div className="list-post-content">
                <p>These are the languages and tools that I see most often in job searches, or just when I'm doing research on my own time. I think it's important to keep learning. I thought being at home would face me witth too many distractions, but it has actually had the adverse effect. I think with my fiance working from home, it has been pushing me to be just as productive as her.</p>
            </div>
        </div>
    )
}

export default ToLearn;
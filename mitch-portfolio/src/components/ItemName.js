import React, { useState, useEffect } from 'react';

const ItemName = () => {

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
        <span key={currentLogo.id}>            
            <img src={currentLogo.source} alt={currentLogo.title} title={currentLogo.title} className="img-fluid mx-auto d-block" />
            <h4 className="text-center">{ currentLogo.title }</h4>
        </span>
    );
}

export default ItemName;
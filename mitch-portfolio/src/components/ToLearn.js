import React, { useState, useEffect } from 'react';

function ToLearn() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost:3002/learn`
        );

        const items = await data.json();
        setItems(items);
    }


    return (
        <div className="flex-child languages">
            <h2>Languages to Learn</h2>
            <div className="logo-parent">
                {items.map((item) =>
                    <img key={item.id} src={item.source} alt={item.title} title={item.title} className="img-fluid mx-auto d-block" />
                )}
            </div>
        </div>
    )
}

export default ToLearn;
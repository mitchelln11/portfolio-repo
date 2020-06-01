import React, { useState, useEffect } from 'react';

// https://www.youtube.com/watch?v=Law7wfdg_ls 

function Languages() {
    useEffect(() => {
        fetchItems();
    }, []); //  Run 1 time on load

    let [items, setItems] = useState([]); // Like your constructor, set to empty array

    const fetchItems = async () => {
        const data = await fetch(
            `https://hardcore-kepler-c0d4c5.netlify.app/languages`
        );

        items = await data.json(); // Parse into JSON format
        setItems(items); // Return items object so we can reference children later
    };

    return (
        <div className="flex-child">
            <h2>Known Languages/Tools</h2>
            <ul className="list-group">
                {items.map((item) =>
                    <li key={item.id} className="list-group-item">
                        {item.title}
                        {item.extension != null ? <span className="badge badge-primary badge-pill">{item.extension}</span> : ""}
                    </li>
                )}
            </ul>
            <div className="list-post-content">
                <p>These are the languages or tools that I am comfortable with. I may not know every single aspect of all of these, but if a developer says they do, they are likely lying to you.</p>
                <p>This list is being pulled with the native fetch function and grabbing a local JSON file. I am simulating that the JSON file is on a separate server with JSON-Server.</p>
            </div>
        </div>
    )
}

export default Languages;
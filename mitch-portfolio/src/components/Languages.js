import React, { useEffect } from 'react';

const url = "http://localhost:3001/languages";

const Languages = () => {
    useEffect(() => {
         fetch(url)
         .then(res => res.json())
         .then(data => {
             console.log(data);
         })
    }, [])

    return (
        <ul>
            <li>Test</li>
        </ul>
    )
}



export default Languages;
import React, { useState, useEffect } from 'react';

function Languages() {
    useEffect(() => {
        fetchItems();
    }, []); //  Run 1 time on load

    const [items, setItems] = useState([]); // Like your constructor, set to empty array

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost:3001/languages`
        );

        const items = await data.json();
        setItems(items);
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
        </div>
    )
}


// const useFetch = (url) => {
//     const [response, setResponse] = useState(null);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const FetchData = async () => {
//             try {
//                 const res =  await fetch(url);
//                 const json = await res.json();
//                 setResponse(json);
//             } catch (error) {
//                 setError(error);
//             }
//         };
//         FetchData();
//     }, []);
//     return { response, error };
// };

// const Languages = () => {
//     const res = useFetch(`http://localhost:3001/languages`);

//     // Why is this needed?
//     if(!res.response) {
//         return <div>Loading...</div>;
//     }
    
//     return (
//         <div className="flex-child">
//             <h2>Known Coding Languages/Tools</h2>
//             <ul className="list-group">
//                 {res.response.map((info) =>
//                     <li key={info.id} className="list-group-item">
//                         {info.title}
//                         {info.extension != null ? <span className="badge badge-primary badge-pill">{info.extension}</span> : ""}
//                     </li>
//                 )}
//             </ul>
//             <div className="list-post-content">
//                 <p>These are the languages or tools that I am comfortable with. I may not know every single aspect of all of these, but if a developer says they do, they are likely lying to you.</p>
//                 <p>This list is being pulled with the native fetch function and grabbing a local JSON file. I am simulating that the JSON file is on a separate server with JSON-Server.</p>
//             </div>
//         </div>
//     )
// }

export default Languages;
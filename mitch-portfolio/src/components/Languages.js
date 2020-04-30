import React, { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const res =  await fetch(url);
                const json = await res.json();
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        FetchData();
    }, []);
    return { response, error };
};

const Languages = () => {
    const res = useFetch(`http://localhost:3001/languages`);
    if(!res.response) {
        return <div>Loading...</div>;
    }
    
    return (
        <div className="flex-child">
            <h2>Known Coding Languages</h2>
            <ul className="list-group">
                {res.response.map((info) =>
                    <li key={info.id} className="list-group-item">
                        {info.title}
                        {info.extension != null ? <span className="badge badge-primary badge-pill">{info.extension}</span> : ""}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Languages;
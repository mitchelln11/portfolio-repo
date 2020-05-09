import React from 'react';

const ItemName = ({ id, title, source }) => {
    return (
        <span key={id}>
            <div className="img-container">
                <img src={source} alt={title} title={title} className="img-fluid mx-auto d-block" />
            </div>
            <h4 className="text-center">{ title }</h4>
        </span>
    );
}

export default ItemName;
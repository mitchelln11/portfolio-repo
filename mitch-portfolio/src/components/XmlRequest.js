import React, { useState, useEffect } from 'react';

const XmlCall = () => {

    // Make API call
    useEffect(() => {
        const methodType = "";
        const requestLink = "";

        const xhr = new XMLHttpRequest();
        xhr.open(methodType, requestLink);
        // setItems(items);
        // fetchItems();
    }, []);
}

export default XmlCall;
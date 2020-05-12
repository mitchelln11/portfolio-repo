import React from 'react';
import ItemName from './ItemName';

function ToLearn() {
    
    return (
        <div className="flex-child languages">
            <h2>Languages to Learn</h2>
            <div className="logo-parent">
                <div className="img-container">
                    <ItemName />
                </div>
            </div>
            <div className="list-post-content">
                <p>These are the languages and tools that I see most often in job searches, or just when I'm doing research on my own time. I think it's important to keep learning. I thought being at home would face me witth too many distractions, but it has actually had the adverse effect. I think with my fiance working from home, it has been pushing me to be just as productive as her.</p>
            </div>
        </div>
    )
}

export default ToLearn;
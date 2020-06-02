import React from 'react';
// import StationCoords from './StationCoords';

const SpaceStation = () => {
    
    return (
        <div id="spaceStation-block">
            <h2>Location of the International Space Station</h2>
            {/* <StationCoords /> */}
            <p>This is an example of a REST API. I chose the Open Notify REST API exclusively because it doesn't require an API key. I know most do, but in this case, I didn't want to expose a real API key by using it on the client-side.</p>
            <div className="photo-credit">
                <small>Photo by Andy Holmes via Unsplash.com</small>
            </div>
        </div>
    )
}

export default SpaceStation;
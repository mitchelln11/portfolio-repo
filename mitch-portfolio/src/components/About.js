import React from 'react';

const aboutBlock = () => {
    return (
        <div id="about-block">
            <div className="flex-container">
                <div className="flex-child">
                    <h3>About Me</h3>
                    <p>My past experience started out on the front-end of coding. This includes HTML5, CSS3, JavaScript, WordPress<em>(PHP)</em> and the Bootstrap framework. I've also worked with version control such as GitHub and BitBucket. My first real job out of college, in addition to standard HTML and CSS, included creating email campaigns which needed to be coded using tables.<em>(I believe it's still that way today</em>.</p>

                    <p>During the quarantine, I've been taking the time to fill in some of the gaps when it comes JavaScript. I've also been looking into React, Express, and MongoDB. I already did a project with React class components, but I'd prefer the newer hooks. In fact, I am re-making this portfolio using React Hooks. I also plan on looking into Angular and Firebase.</p>
                </div>

                <div className="flex-child">
                    <figure className="figure"> 
                        <img src="images/mitchell-bio-image.jpg" alt="Mitchell Naleid" title="Mitchell Naleid" className="rounded-circle img-fluid d-block mx-auto" />
                        <figcaption className="figure-caption">Photo by Sarah Geraldson</figcaption>
					</figure>
                </div>
            </div>
        </div>
    )
}

export default aboutBlock;
import { useState } from "react";

import genial1 from "../assets/genial-images/genial-1.png";
import genial2 from "../assets/genial-images/genial-2.png";
import genial3 from "../assets/genial-images/genial-3.png";

function Projects() {
    const genialImages = [genial1, genial2, genial3];
    const [genialImage, setGenialImage] = useState(0);

    function handleGoBack() {
        setGenialImage(genialImage - 1);
    }

    function handleNext() {
        setGenialImage(genialImage + 1);
    }

    return (
        <div className="section-container" id="projects-container">
            <h1 className="section-label">Projects</h1>
            <div className="project-container">
                {
                    genialImage === 0 ?
                    <div id="project-back-button-container">
                        <button className="gallery-button" disabled>Back</button> 
                    </div>
                        :
                    <div id="project-back-button-container">
                        <button className="gallery-button" onClick={() => handleGoBack()}>Back</button>
                    </div>
                }
                <img 
                    className="project-screenshot" 
                    src={genialImages[genialImage]}
                />
                {
                    genialImage === 2 ?
                    <div id="project-next-button-container">
                        <button className="gallery-button" disabled>Next</button>
                    </div> 
                        :
                    <div id="project-next-button-container">
                        <button className="gallery-button" onClick={() => handleNext()}>Next</button>
                    </div>
                }
            </div>
            <h1 className="project-name">Genial</h1>
            <div className="skill-tag-container">
                <p>React</p>
                <p>REST API</p>
                <p>Bootstrap</p>
                <p>HTML</p>
                <p>SASS</p>
            </div>
            <div className="project-link-container">
                <a href="https://genial-app.com" className="project-link">Site Link</a>
                <p>|</p>
                <a href="https://github.com/nicholaskade/genial" className="project-link">GitHub Link</a>
            </div>
            <div className="list-container">
                <ul>
                    <li>Built single-page application in HTML/CSS/Javascript with React to help users find Global Entry appointments</li>
                    <li>Inspected network traffic to access the Department of Homeland Security's previate Trusted Traveler Program API</li>
                    <li>Expanded upon functionality of Trusted Traveler Program's website, enabling users to search for appointments within a given timeframe and scan for new appointment availabilities in real time</li>
                    <li>Implemented notifications for users when new appointments are available using the browser Notifications API</li>
                </ul>
            </div>
        </div>
    )
};

export default Projects;
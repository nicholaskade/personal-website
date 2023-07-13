import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

import { useNavigate } from "react-router-dom";

function Resume() {

    const nav = useNavigate();

    return (
        <>
            <div id="resume-header-container">
                <h1 className="header-text" onClick={() => nav("/")}>Nicholas Nip</h1>
                <h1 className="typing-effect-text">Full-Stack Software Engineer</h1>
            </div>

            <Skills/>
            <Education />
            <Experience />
        </>
    )
};

export default Resume;
import Skills from "./Skills";

import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

function Resume() {
    const { ref, inView } = useInView();
    const nav = useNavigate();

    return (
        <>
            <div id="resume-header-container">
                <h1 className="header-text" onClick={() => nav("/")}>Nicholas Nip</h1>
                <h1 className="typing-effect-text">Full-Stack Software Engineer</h1>
            </div>

            <Skills/>
        </>
    )
};

export default Resume;
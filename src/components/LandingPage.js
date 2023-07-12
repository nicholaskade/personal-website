import { useNavigate } from "react-router-dom";

function LandingPage() {

    const nav = useNavigate();
    
    return (
        <div id="landing-page-container">
            <div id="landing-page-text-box">
                <h1 className="landing-page-text">Nicholas Nip</h1>
                <h1 className="landing-page-text">Software Engineer</h1>
                
                <br></br>

                <span onClick={() => nav("/resume")} className="landing-page-text">Resume</span>
                <span onClick={() => nav("/projects")} className="landing-page-text">Projects</span>
                <span onClick={() => nav("/aboutme")} className="landing-page-text">About Me</span>
            </div>
        </div>
    )
};

export default LandingPage;
import './output.css';

import Resume from './components/Resume';

import Github from "./assets/github-icon.png";
import Email from "./assets/email-icon.png";
import LinkedIn from "./assets/linkedin-icon.png";

import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  return (
    <>
      <div id="resume-header-container">
        <h1 className="header-text" onClick={() => nav("/")}>Nicholas Nip</h1>
        <h1 className="typing-effect-text">Full-Stack Software Engineer</h1>
      </div>
    
      <Resume />

      <div id="footer-container">
        <div id="resume-link-container">
          <a id="resume-link" href="./assets/Nicholas Nip Resume.pdf" download>Download Full Resume</a>
        </div>
        <div id="footer-icons-container">
          <a href="https://github.com/nicholaskade" target="_blank"><img src={Github} alt="Github icon" className="footer-icon"/></a>
          <a href="mailto: nicholaskadenip@gmail.com"><img src={Email} alt="Email icon" className="footer-icon"/></a>
          <a href="https://www.linkedin.com/in/nicholas-dev/" target="_blank"><img src={LinkedIn} alt="LinkedIn icon" className="footer-icon"/></a>
        </div>
      </div>
    </>
  );
};

export default App;

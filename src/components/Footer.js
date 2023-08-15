import Github from "../assets/github-icon.png";
import Email from "../assets/email-icon.png";
import LinkedIn from "../assets/linkedin-icon.png";

function Footer() {
    return (
        <div id="footer-container">
            <div id="footer-icons-container">
                <a id="resume-link" href="Nicholas-Nip-Resume.pdf" download="Nicholas Nip Resume">Download Full Resume</a>
                <a href="https://github.com/nicholaskade" target="_blank"><img src={Github} alt="Github icon" className="footer-icon"/></a>
                <a href="mailto: nicholaskadenip@gmail.com"><img src={Email} alt="Email icon" className="footer-icon"/></a>
                <a href="https://www.linkedin.com/in/nicholas-dev/" target="_blank"><img src={LinkedIn} alt="LinkedIn icon" className="footer-icon"/></a>
            </div>
        </div>
    );
}

export default Footer;
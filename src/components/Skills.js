import jsIcon from "../assets/javascript-icon.png";
import cssIcon from "../assets/css-icon.png";
import firebaseIcon from "../assets/firebase-icon.png";
import postgresqlIcon from "../assets/postgresql-icon.png";
import pythonIcon from "../assets/python-icon.png";
import railsIcon from "../assets/rails-icon.png";
import rubyIcon from "../assets/ruby-icon.png";
import sassIcon from "../assets/sass-icon.png";
import reactIcon from "../assets/react-icon.png";

function Skills() {
        

    const frontend = [
        { image: jsIcon, name: "JavaScript" }, 
        { image: reactIcon, name: "React" }, 
        { image: cssIcon, name: "CSS" }, 
        { image: sassIcon, name: "SASS" }
    ];

    const backend = [ 
        { image: rubyIcon, name: "Ruby" }, 
        { image: railsIcon, name: "Rails" }, 
        { image: pythonIcon, name: "Python" }, 
        { image: firebaseIcon, name: "Firebase" },
        { image: postgresqlIcon, name: "PostgreSQL" }
    ];

    const generateFESkills = frontend.map((skill) => { 
        return (
            <div className="bullet-point-container">
                <img src={skill.image} className="skill-icon"/>
                <h1 className="skill-name">{skill.name}</h1>
            </div>
        )
    });

    const generateBESkills = backend.map((skill) => { 
        return (
            <div className="bullet-point-container">
                <img src={skill.image} className="skill-icon"/>
                <h1 className="skill-name">{skill.name}</h1>
            </div>
        ) });

    return (
        <div className="section-container" id="skill-section-container">
            <h1 id="skills-label" className="section-label">Skills</h1>
            <div id="skill-column-container">
                <div className="skill-category-container">
                    <h1 className="skill-category-text">Front End</h1>
                    <div className="bullet-points-container">
                        { generateFESkills }
                    </div>
                </div>

                <div id="skills-divider"></div>

                <div className="skill-category-container">
                    <h1 className="skill-category-text">Back End</h1>
                    <div className="bullet-points-container">
                        { generateBESkills } 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;
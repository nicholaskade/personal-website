import unaIcon from "../assets/una-icon.png";
import gcCunyIcon from "../assets/gc-cuny-icon.png";
import flatironIcon from "../assets/flatiron-icon.png";

function Education() {

    const schools = [
        { name: "University of North Alabama", icon: unaIcon, credential: "Bachelor of Arts", concentration: "Political Science" },
        { name: "The Graduate Center", subname: "City University of New York", icon: gcCunyIcon, credential: "Master of Arts", concentration: "Political Science" },
        { name: "Flatiron School", icon: flatironIcon, credential: "Certificate", concentration: "Software Engineering" },
    ];

    const generateEducation = schools.map((school) => {
        return (
            <div className="school-container">
                <img className="school-icon" src={school.icon} alt={school.name}/>
                <p className="school-text">{school.name}</p>
                {
                    school.subname ? 
                        <p className="school-text">{school.subname}</p>  : <></>
                }
                <p className="school-text">{school.credential}</p>
                <p className="school-text">{school.concentration}</p>
            </div>
        )
    });

    return (
        <div className="section-container" id="education-container">
            <h1 className="section-label">Education</h1>
            <div id="schools-container">
                {generateEducation}
            </div>
        </div>
    )
}

export default Education;
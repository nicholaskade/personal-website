import mvIcon from "../assets/mansueto-ventures-icon.jpeg";
import amIcon from "../assets/mastermind-icon.jpeg";

function Experience() {

    const employers = [
        {
            title: "Software Engineer", 
            company: "automotiveMastermind",
            tenure: "October 2023 - Present",
            skills: ["SQL", "JavaScript", "React", "Python"],
            bullets: [
                "Reduced marketing mailer PDF production processing time by 30% by utilizing Python and regular expressions to optimize JavaScript codebase and associated XML files",
                "Implemented automated image conversion process using Python and scheduled tasks on marketing production servers",
                "Developed React components for marketing dashboard in the aim of eliminating developer oversight of scripts",
                "Executed monthly SQL queries to prepare over 5.5 million records, facilitating the production of 11+ million print and email marketing pieces for thousands of car dealerships and manufacturers across the United States and Canada",
                "Contributed to strategic planning for future production processes, including marketing dashboard component diagramming and internal web application API design"
            ],
            image: amIcon
        },
        {
            title: "Assistant Marketing Coordinator", 
            company: "Mansuto Ventures, LLC",
            tenure: "August 2021 - October 2022",
            skills: ["HTML", "Cross-Functional Coordination", "Account Management", "Microsoft Excel"],
            bullets: [
                "Managed the group subscriptions program for Inc. Magazine and Fast Company by communicating with an array of clients, ranging from small businesses to Fortune 500 companies",
                "Proposed, designed, implemented automation using Smartsheet to announce client subscription changes and upcoming expirations via Slack, increasing sales by up to 70%, improving overall client retention, and enabling effortless tracking and maintenance of client accounts",
                "Updated HTML on the company's websites to include information from client contracts and licenses",
                "Designed, implemented method to associate subscription data with relevant metadata using Microsoft Excel functions to rectify data correctness issues in database with over 7,000 entries"
            ],
            image: mvIcon
        }
    ];

    const createJobs = employers.map((job) => {
        return(
            <div className="job-container">
                <img src={job.image}/>
                <div className="job-header-container">
                    <div className="job-title-container">
                    <h2>{job.title}</h2>
                        <p>{job.company}</p>
                        <p>{job.tenure}</p>
                        <div className="skill-tag-container">
                            {
                                job.skills.map((skill) => {
                                    return (
                                        <p>{skill}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="list-container">
                    <ul>
                        {
                            job.bullets.map((bullet) => {
                                return (
                                    <li>{bullet}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    });

    return (
        <div className="section-container" id="experience-container">
            <h1 className="section-label">Work Experience</h1>
            <>
                {createJobs}
            </>
        </div>
    )
}

export default Experience;
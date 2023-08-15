import mvIcon from "../assets/mansueto-ventures-icon.jpeg";

function Experience() {

    return (
        <div id="experience-container">
            <h1>Work Experience</h1>
            <div className="job-container">
                <img alt="Inc. Magazine and Fast Company icon" src={mvIcon}/>
                <div className="job-header-container">
                    <div className="job-title-container">
                        <h2>Assistant Marketing Coordinator</h2>
                        <p>Mansueto Ventures, LLC</p>
                        <p>August 2021 - October 2022</p>
                        
                        <div className="job-skills-container">
                            <p>HTML</p>
                            <p>Cross-Functional Coordination</p>
                            <p>Account Management</p>
                            <p>Microsoft Excel</p>
                        </div>
                    </div>
                </div>

                <div className="job-responsibilities-container">
                    <ul>
                        <li>
                            <b>Managed</b> the group subscriptions program for <i>Inc. Magazine</i> and <i>Fast Company</i> by communicating 
                            <br/> with an array of clients, ranging from small businesses to Fortune 500 companies
                        </li>

                        <li>
                            Proposed, designed, implemented <b>automation</b> using Smartsheet to announce client subscription changes 
                            <br/> and upcoming expirations via Slack, increasing sales by up to 70%, improving overall client retention, and 
                            <br/><b>enabling effortless tracking and maintenance</b> of client accounts
                        </li>

                        <li>
                            <b>Updated HTML</b> on the company's websites to include information from client contracts and licenses
                        </li>

                        <li>
                            Designed, implemented method to associate subscription data with relevant metadata using 
                            <br/><b>Microsoft Excel functions</b> to rectify data correctness issues in database with over 7,000 entries
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experience;
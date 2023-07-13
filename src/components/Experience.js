import { useInView } from "react-intersection-observer";

import mvIcon from "../assets/mansueto-ventures-icon.jpeg";

function Experience() {
    const { ref, inView } = useInView();

    return (
        <div
            id="experience-container"
            className={ inView ? "shown" : "hidden"} 
            ref={ref}   
        >
            <img src={mvIcon}/>
        </div>
    )
}

export default Experience;
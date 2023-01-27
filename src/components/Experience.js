import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {

    const experienceData = [{
        position: "Frontend Developer",
        address: "KAOS, Bangalore",
        from: "Apr 2022",
        to: "present",
    }, {
        position: "Python Mentor",
        address: "IITM B.S. Degree, Chennai",
        from: "Aug 2022",
        to: "Sep 2022"
    }, {
        position: "Software Engineer",
        address: "Roxiler Systems, Pune",
        from: "Jan 2022",
        to: "Apr 2022"
    }]
    return (
        <div className="Experience">
            <div className="experience-title">
                Experience
            </div>

            <div className="point-top">
            </div>
            {experienceData.map((exp) => (
                <div className="experience-box">
                    <h2 className="position">{exp.position}</h2>
                    <div class="divider">
                        <div className="diamond"></div>
                        <div class="line"></div>
                        <div class="point-right"></div>
                        <div className="timeline">
                            <span>{exp.from} - </span>
                            <span>{exp.to}</span>           
                        </div>
                    </div>
                    <h3 className="address"> <FontAwesomeIcon icon={faLocationDot}  /> {exp.address}</h3>
                </div>
            ))}
        </div>
    )
}

export default Experience;
import React from "react";
import styles from "./Education.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Education = () => {

    const educationData = [{
        degree: "B.S.",
        subject: "Data Science",
        address: "IIT Madras, Tamil Nadu",
        timeline: "Jan 2021 - present",
        note: ""
    }, {
        degree: "B.Tech.",
        subject: "Computer Science",
        address: "IIIT Kalyani, West Bengal",
        timeline: "May 2018 - Sep 2018",
        note: "Dropped"
    }]
    return (
        <div className={styles.Education}>
            <div className={styles.educationTitle}>
                Education
            </div>

            <div className={styles.pointTop}>
            </div>
            {educationData.map((edu) => (
                <div className={styles.educationBox}>
                    <div className={styles.course}>
                    <h2 >{edu.degree}</h2>
                    {!!edu.note && <span>{`(${edu.note})`}</span>}
                    </div>  
                    <div className={styles.subject}>{edu.subject}</div>
                    <div class={styles.divider} >
                        <div className={styles.timeline}>{edu.timeline}</div>
                        <div class={styles.pointLeft}></div>
                        <div class={styles.line}></div>
                        <div className={styles.circle}></div>
                    </div>
                    <h3 className={styles.address}><FontAwesomeIcon icon={faLocationDot}  /> {edu.address}</h3>
                </div>
            ))}
        </div>
    )
}

export default Education;
import React from "react";
import ReportsEventsWebinarsCard from "./ReportsEventsWebinarsCard";
import styles from "../styles/Reports_Articles_Webinars/Reports_Articles_Webinar.module.scss"

const ReportsEventsWebinars = (props : any) => {
    const {data,type} = props;

    let rawContainer;
    if(type == 'reports_events_webinars'){
        rawContainer = styles.type1_raw_container;
    }else if(type == 'community'){
        rawContainer = styles.type2_raw_container;
    }else if(type == 'about_elastic'){
        rawContainer = styles.type3_raw_container;
    }
    
    const rewCardComponents : React.ReactNode[] = Array.from(data.card.map((card : any) => <ReportsEventsWebinarsCard data = {card} type = {type}/>));    
    return (
        <div className={rawContainer}>
            <p className={styles.section_title}>{data.title}</p>
            <div className={styles.rawCards_container}>
                {rewCardComponents}
            </div>
        </div>
        );
}

export default ReportsEventsWebinars;
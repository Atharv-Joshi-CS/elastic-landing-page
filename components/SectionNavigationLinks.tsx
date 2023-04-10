import React from "react";
import styles from "../styles/Footer/Footer.module.scss";

const SectionNavigationLinks = (props : any) => {
    const {data} = props;
    console.log(data);
    const cta : React.ReactNode[] = Array.from(data.cta.map((cta : any) => <a href={cta.cta_link.href}>{cta.cta_link.title}</a> ))
    return (
        <div className={styles.section_navigation_links}>
        <p>{data.title}</p>
        <div className={styles.links_container}>
            {cta}
        </div>
        </div>
    );
}

export default SectionNavigationLinks
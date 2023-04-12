import React from "react";
import styles from "../styles/Footer/Footer.module.scss";
import { SectionNavigationLinksTD } from "@/utilities/type_definitions";

interface SectionNavigationLinks{
    data : SectionNavigationLinksTD
}

const SectionNavigationLinks = ({data} : SectionNavigationLinks) => {
    const cta : React.ReactNode[] = Array.from(data.cta.map((cta : {cta_link:{title : string, href : string}}) => <a href={cta.cta_link.href}>{cta.cta_link.title}</a> ))
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
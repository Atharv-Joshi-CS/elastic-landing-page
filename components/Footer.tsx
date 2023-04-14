import SectionNavigationLinks from "./SectionNavigationLinks";
import NewsLetter from "./NewsLetter";
import Socials from "./Socials";
import { FooterTD, SectionNavigationLinksTD } from "@/utilities/type_definitions";
import FooterCTALinks from "./FooterCTAButtons";
import styles from "../styles/Footer/Footer.module.scss";
import { useState, ChangeEvent } from "react";

const Footer = ({data} : {data : FooterTD}) => {  
    
    const sectionNavigationLinks : React.ReactNode[] = Array.from((data.section_navigation_links).map((data : SectionNavigationLinksTD) => <SectionNavigationLinks data = {data}/>));

    const [selectedOption, setSelectedOption] = useState('English');

    const handleSelectChange = (event : ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(event.target.value);
    };
    
    return (
        <div className={styles.footer}>
            <div className={styles.footer_section1}>
                <div className={styles.snl_outer_container}>
                    {sectionNavigationLinks[0]}
                    <div className={styles.snl_inner_container}>
                        {sectionNavigationLinks[1]}
                        {sectionNavigationLinks[2]}
                    </div>
                </div>
                <div>
                    <NewsLetter data = {data.newsletter}/>
                    <Socials data = {data.socials}/>
                </div>
            </div>
            <hr  className={styles.hr}/>
            <div className={styles.language_cta}>
                <div>
                    <p>Language</p>
                    <select className={styles.language_selector} value={selectedOption} onChange={handleSelectChange}>
                        <option value="Deutsch">Deutsch</option>
                        <option value="English">English</option>
                        <option value="Espanyol">Espanyol</option>
                        <option value="Francias">Francias</option>
                    </select>
                </div>
                <div className={styles.footer_cta_copyright}>
                    <FooterCTALinks data = {data.cta_buttons}/>
                    <span dangerouslySetInnerHTML={{ __html: data.copyright }} />
                </div>
            </div>

            <div className={styles.copyright_logo}>
                <div className={styles.copyright}>
                    <span  dangerouslySetInnerHTML={{ __html: data.trademark }} />
                </div>
                <img className={styles.elastic_logo} src={data.logo.url} alt="alternate elastic logo" />
            </div>
        </div>
    );
}

export default Footer
import SectionNavigationLinks from "./SectionNavigationLinks";
import NewsLetter from "./NewsLetter";
import Socials from "./Socials";
import FooterCTALinks from "./FooterCTAButtons";
import styles from "../styles/Footer/Footer.module.scss";
const Footer = (props : any) => {
    const {data : {
        entry
    }} = props;
    
    const sectionNavigationLinks : React.ReactNode[] = Array.from((entry.section_navigation_links).map((data : any) => <SectionNavigationLinks data = {data}/>));
    
    console.log(entry);
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
                    <NewsLetter data = {entry.newsletter}/>
                    <Socials data = {entry.socials}/>
                </div>
            </div>
            <hr  className={styles.hr}/>
            <div className={styles.footer_cta_copyright}>
                <FooterCTALinks data = {entry.cta_buttons}/>
                <span dangerouslySetInnerHTML={{ __html: entry.trademark }} />
            </div>
            <div className={styles.copyright_logo}>
                <div className={styles.copyright}>
                    <span  dangerouslySetInnerHTML={{ __html: entry.copyright }} />
                </div>
                <img className={styles.logo} src={entry.logo.url} alt="alternate elastic logo" />
            </div>
        </div>
    );
}

export default Footer
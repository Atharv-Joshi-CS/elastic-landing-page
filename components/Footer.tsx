import SectionNavigationLinks from "./SectionNavigationLinks";
import NewsLetter from "./NewsLetter";
import Socials from "./Socials";
import FooterCTALinks from "./FooterCTAButtons";
const Footer = (props : any) => {
    const {data : {
        entry
    }} = props;
    
    const sectionNavigationLinks : React.ReactNode[] = Array.from((entry.section_navigation_links).map((data : any) => <SectionNavigationLinks data = {data}/>));
    
    console.log(entry);
    return (
        <div>
            {sectionNavigationLinks}
            <NewsLetter data = {entry.newsletter}/>
            <Socials data = {entry.socials}/>
            <FooterCTALinks data = {entry.cta_buttons}/>
            <span dangerouslySetInnerHTML={{ __html: entry.copyright }} />
            <span dangerouslySetInnerHTML={{ __html: entry.trademark }} />
            <div>

            </div>
        </div>
    );
}

export default Footer
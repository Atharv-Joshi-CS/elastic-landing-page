import { SocialsTD } from "@/utilities/type_definitions";
import styles from "../styles/Footer/Footer.module.scss";

interface Socials{
    data : SocialsTD
}

const Socials = ({data} : {data : SocialsTD}) => {
    
        const cta : React.ReactNode[] = Array.from(
            data.cta.map(
            (cta : {cta_link:{title : string, href : string}, _metadata : {uid : string}}) => 
            !cta._metadata.uid || !cta.cta_link.title ? <></> :<a key={cta._metadata.uid} className={styles.social_button} href={cta.cta_link.href}><img className={styles.logo} src={`/static/images/footer-icon-${cta.cta_link.title}.svg`} alt="social media logo" /></a> ))
    return (
        <div className={styles.socials}>
        {!data.title ? <></> :<p>{data.title}</p>}
        <div>
            {cta}
        </div>
        </div>
    );
}

export default Socials;
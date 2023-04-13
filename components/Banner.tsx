import { BannerTD } from "@/utilities/type_definitions";
import styles from "../styles/Banner/Banner.module.scss"

const Banner = ({data} : {data : BannerTD}) => {
    
    return (
        <div className={styles.banner_container}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.subtitle}>{data.subtitle}</p>
            <a className= {`secondary_button ${styles.secondary_btn}`} href={data.cta.cta_link.href} >{data.cta.cta_link.title}</a>
        </div>
    );
}

export default Banner
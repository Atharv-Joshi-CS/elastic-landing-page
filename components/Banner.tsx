import type bannerStylesType from "../styles/Banner/Banner.module"
import styles from "../styles/Banner/Banner.module.scss"

const Banner = (props : any) => {
    const entry = props.data.entry;
    console.log(entry);
    return (
        <div className={styles.banner_container}>
            <h1 className={styles.title}>{entry.title}</h1>
            <p className={styles.subtitle}>{entry.subtitle}</p>
            <a className={styles.button_secondary} href={entry.cta.cta_link.href} >{entry.cta.cta_link.title}</a>
        </div>
    );
}

export default Banner
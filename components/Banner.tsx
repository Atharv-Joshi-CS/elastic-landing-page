import styles from "../styles/Banner/Banner.module.scss"

const Banner = (props : any) => {
    const entry = props.data.entry;
    return (
        <div className={styles.banner_container}>
            <h1 className={styles.title}>{entry.title}</h1>
            <p className={styles.subtitle}>{entry.subtitle}</p>
            <a className= {`secondary_button ${styles.secondary_btn}`} href={entry.cta.cta_link.href} >{entry.cta.cta_link.title}</a>
        </div>
    );
}

export default Banner
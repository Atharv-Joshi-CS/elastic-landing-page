import styles from "../styles/Footer/Footer.module.scss";

const Socials = (props : any) => {
    const {data} = props;
    
        const cta : React.ReactNode[] = Array.from(data.cta.map((cta : any) => <a className={styles.social_button} href={cta.cta_link.href}><img className={styles.logo} src={`/static/images/footer-icon-${cta.cta_link.title}.svg`} alt="social media logo" /></a> ))
    return (
        <div className={styles.socials}>
        <p>{data.title}</p>
        <div>
            {cta}
        </div>
        </div>
    );
}

export default Socials;
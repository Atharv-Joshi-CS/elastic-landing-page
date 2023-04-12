import styles from "../styles/Footer/Footer.module.scss";

const NewsLetter = (props : any) => {
    const {data} = props;
    
    return (
        <div className={styles.newsletter}>
        <h2>{data.title}</h2>
        <div className={styles.newsletter_content}>
        <input className={styles.email_input} placeholder="Email address" type="email" name="email" id="email" />
        <a className={`secondary_button ${styles.secondary_btn}`} href={data.cta.cta_link.href}>{data.cta.cta_link.title}</a>
        </div>
        <div className={styles.terms_and_conditions}>
        <span dangerouslySetInnerHTML={{ __html: data.terms_and_conditions }} />
        </div>
        </div>
    );
}

export default NewsLetter;
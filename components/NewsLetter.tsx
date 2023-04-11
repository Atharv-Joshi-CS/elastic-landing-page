import styles from "../styles/Footer/Footer.module.scss";

const NewsLetter = (props : any) => {
    const {data} = props;
    // console.log(data);
    
    return (
        <div className={styles.newsletter}>
        <h2>{data.title}</h2>
        <a className="secondary_button" href={data.cta.cta_link.href}>{data.cta.cta_link.title}</a>
        <div className={styles.terms_and_conditions}>
        <span dangerouslySetInnerHTML={{ __html: data.terms_and_conditions }} />
        </div>
        </div>
    );
}

export default NewsLetter;
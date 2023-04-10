import styles from "../styles/Footer/Footer.module.scss";
import Twitter from "../public/images/footer-icon-twitter.svg";
const Socials = (props : any) => {
    const {data} = props;
    // console.log(`socials data : ${data}`);
    // console.log(data);
    
    const cta : React.ReactNode[] = Array.from(data.cta.map((cta : any) => <a className={styles.social_button} href={cta.cta_link.href}>icon</a> ))
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
import type rawStylesType from "@/styles/Reports_Articles_Webinars/Reports_Articles_Webinars.module";
import styles from "../styles/Reports_Articles_Webinars/Reports_Articles_Webinar.module.scss"
// import Image from 'next/image';


const ReportsEventsWebinarsCard = (props : any) => {
    const {data, type} = props;
    // console.log(data);
    console.log(type);
    let titleStyle;
    let subtitleStyle
    if(type == 1){
        titleStyle = styles.type1_title;
        subtitleStyle = styles.type1_subtitle;
    }
    else if(type == 2){
        titleStyle = styles.type2_title;
        subtitleStyle = styles.type2_subtitle;
    }
    else if(type == 3){
        titleStyle = styles.type3_title;
        subtitleStyle = styles.type3_subtitle;
    }

    return(
        <div className={styles.rawcard}>
        <p className={styles.category}>{data.category}</p>
        {data.logo != null ? <img className={styles.logo} src={data.logo.url} alt=""/> : <></>}
        <p className={titleStyle}>{data.title}</p>
        <p className={subtitleStyle}>{data.subtitle}</p>
        <a className={styles.button_primary} href={data.link.href}>{data.link.title}</a>
        {/* <Image src="../public/images/right-arrow.svg" alt="right-arrow"  width={500} height={500} /> */}
        </div>
    );
}

export default ReportsEventsWebinarsCard;
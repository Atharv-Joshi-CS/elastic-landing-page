import type rawStylesType from "@/styles/Reports_Articles_Webinars/Reports_Articles_Webinars.module";
import styles from "../styles/Reports_Articles_Webinars/Reports_Articles_Webinar.module.scss"


const ReportsEventsWebinarsCard = (props : any) => {
    const {data, type} = props;

    let titleStyle;
    let subtitleStyle
    if(type == 'reports_events_webinars'){
        titleStyle = styles.type1_title;
        subtitleStyle = styles.type1_subtitle;
    }
    else if(type == 'community'){
        titleStyle = styles.type2_title;
        subtitleStyle = styles.type2_subtitle;
    }
    else if(type == 'about_elastic'){
        titleStyle = styles.type3_title;
        subtitleStyle = styles.type3_subtitle;
    }

    return(
        <div className={styles.rawcard}>
            <a className={styles.card_button} href={type == 'reports_events_webinars'  || type == 'about_elastic' ? data.link.href : ""}>
                <div className={styles.raw_content}>
                    <p className={styles.category}>{data.category}</p>
                    {data.logo != null ? <img className={styles.logo} src={data.logo.url} alt="logo"/> : <></>}
                    <p className={titleStyle}>{data.title}</p>
                    <p className={subtitleStyle}>{data.subtitle}</p>
                </div>
                <a className={styles.button_primary} href={data.link.href}>
                    <div className={styles.button_display_content}>
                        { type == 'reports_events_webinars' || type == 'community' ? data.link.title : <></>}
                        <img className="arrow-right" src={`/static/images/${type == 'about_elastic' ? "arrow-right-white.svg" : 'right-arrow.svg'}`} />
                    </div>
                </a>
            </a>
        </div>
    );
}

export default ReportsEventsWebinarsCard;
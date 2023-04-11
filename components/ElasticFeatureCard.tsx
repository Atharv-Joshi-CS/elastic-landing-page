import styles from "../styles/ElasticFeatures/ElasticFeatures.module.scss";

const ElasticFeatureCard = (props : any) => {
    const {data} = props;
    console.log(data);

    const featureContent =         
    <div>
        <div>
            <div className={styles.feature_header}>
                <img src={data.logo.url} alt=""/>
                <p>{data.title}</p>
            </div>
            <p className={styles.subtitle}>{data.subtitle}</p>
            <p className={styles.description}>{data.description}</p>
            <a className={styles.button_primary} href={data.cta.href}>
                <div className={styles.button_display_content}>
                    {data.cta.title}
                    <img className="arrow-right" src="/static/images/right-arrow.svg" />
                </div>
            </a>
        </div>
        <div className={styles.testimonial}>
            <p className={styles.value_proposition}>{data.testimonial.value_proposition}</p>
            <div className={styles.logo_position}>
                {data.testimonial.logo != null ? <img src={data.testimonial.logo.url} alt=""/> : <></>}
                <p>{data.testimonial.employee_position}</p>
            </div>
        </div>
    </div>

    const featureVideo = 
    <div>
        {data.video != null ? 	<video width="640" height="480" autoPlay muted loop>
        <source src={data.video.url} type="video/mp4"/>
        Your browser does not support the video tag.
        </video> : <div className={styles.placeholder}></div>}
    </div>

    const featureBlock = data.video_on_left == true ? 
    <div className={styles.feature_card}>
        {featureVideo}
        {featureContent}
    </div>
    :
    <div className={styles.feature_card}>
        {featureContent}
        {featureVideo}
    </div>
    
    return (featureBlock);
}

export default ElasticFeatureCard;
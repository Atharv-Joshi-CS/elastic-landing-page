import styles from "../styles/ElasticFeatures/ElasticFeatures.module.scss";
import PrimaryButton from "./PrimaryButton";
import { ElasticFeatureCardTD } from "@/utilities/type_definitions";

const ElasticFeatureCard = ({data}: {data : ElasticFeatureCardTD}) => {

    let isVideoOnLeft = data.video_on_left;

    if(typeof window !== 'undefined'){
        if(window.innerWidth <= 768){
            isVideoOnLeft = false;
        }
    }
    

    const featureContent =         
    <div className={styles.feature_content}>
        <div>
            <div className={styles.feature_header}>
                {!data.logo.url ? <></> : <img src={data.logo.url} alt="logo"/>}
                {!data.title || data.title === '' ? <></> : <p>{data.title}</p>}
            </div>
            {!data.subtitle || data.subtitle === '' ? <></> : <p className={styles.subtitle}>{data.subtitle}</p>}
            {!data.description || data.description === '' ? <></> : <p className={styles.description}>{data.description}</p>}
            {!data.cta.href || !data.cta.title ? <></> : <PrimaryButton href={data.cta.href} hasArrow = {true} hasDisplayText = {true} displayText= {data.cta.title} imgSrc="/static/images/right-arrow.svg"/>}
        </div>
        <div className={styles.testimonial}>
            {!data.testimonial.value_proposition || data.testimonial.value_proposition === '' ? <></> : <p className={styles.value_proposition}>{data.testimonial.value_proposition}</p>}
            <div className={styles.logo_position}>
                {data.testimonial.logo != null ? <img src={data.testimonial.logo.url} alt=""/> : <></>}
                {!data.testimonial.employee_position || data.testimonial.employee_position === '' ? <></> : <p>{data.testimonial.employee_position}</p>}
            </div>
        </div>
    </div>
    const featureVideo = 
    <div className={styles.feature_video}>
        {data.video != null ? 	<video className={styles.videosize} autoPlay muted loop>
        <source src={data.video.url} type="video/mp4"/>
        Your browser does not support the video tag.
        </video> :       <iframe
        className={styles.yt_videosize}
        src={`https://www.youtube.com/embed/O81-mgSkBFk`}
        title="YouTube video player"
        allow="autoplay;"
        allowFullScreen
      ></iframe> }
    </div>

    const featureBlock = isVideoOnLeft === true ? 
    <div key={data._metadata.uid} className={styles.feature_card}>
        {featureVideo}
        {featureContent}
    </div>
    :
    <div key={data._metadata.uid} className={styles.feature_card}>
        {featureContent}
        {featureVideo}
    </div>

    return (featureBlock);
}

export default ElasticFeatureCard;
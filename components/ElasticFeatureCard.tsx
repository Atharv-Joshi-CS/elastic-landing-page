import styles from "../styles/ElasticFeatures/ElasticFeatures.module.scss";
import PrimaryButton from "./PrimaryButton";
import { ElasticFeatureCardTD } from "@/utilities/type_definitions";

const ElasticFeatureCard = ({data}: {data : ElasticFeatureCardTD}) => {

    const featureContent =         
    <div>
        <div>
            <div className={styles.feature_header}>
                <img src={data.logo.url} alt=""/>
                <p>{data.title}</p>
            </div>
            <p className={styles.subtitle}>{data.subtitle}</p>
            <p className={styles.description}>{data.description}</p>
            <PrimaryButton href={data.cta.href} hasArrow = {true} hasDisplayText = {true} displayText= {data.cta.title} imgSrc="/static/images/right-arrow.svg"/>
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
        </video> :       <iframe
        width="640"
        height="480"
        src={`https://www.youtube.com/embed/O81-mgSkBFk`}
        title="YouTube video player"
        allow="autoplay;"
        allowFullScreen
      ></iframe> }
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
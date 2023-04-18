import ElasticFeatureCard from "./ElasticFeatureCard";
import { FeaturesOfElasticProductTD, ElasticFeatureCardTD } from "@/utilities/type_definitions";
import styles from "../styles/ElasticFeatures/ElasticFeatures.module.scss"
import React from "react";
const ElasticFeatures = ({data} : {data : FeaturesOfElasticProductTD}) => {

    const elasticFeaturCardComponents : React.ReactNode[]= Array.from(data.feature_description.map((card : ElasticFeatureCardTD) => !card ? <></> :  <ElasticFeatureCard key={card._metadata.uid} data = {card}/>));
    
    return (
        <div className={styles.elastic_features}>
            {!data.title || data.title === '' ? <></> : <p className={styles.title}>{data.title}</p>}
            {!data.subtitle || data.subtitle === '' ? <></> : <p className={styles.subtitle}>{data.subtitle}</p>}
            {elasticFeaturCardComponents}
        </div>
    );
}

export default ElasticFeatures;
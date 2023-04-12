import ElasticFeatureCard from "./ElasticFeatureCard";
import { FeaturesOfElasticProductTD, ElasticFeatureCardTD } from "@/utilities/type_definitions";
import styles from "../styles/ElasticFeatures/ElasticFeatures.module.scss"
import React from "react";
const ElasticFeatures = ({data} : {data : FeaturesOfElasticProductTD}) => {

    const elasticFeaturCardComponents : React.ReactNode[]= Array.from(data.feature_description.map((card : ElasticFeatureCardTD) => <ElasticFeatureCard data = {card}/>));
    
    return (
        <div className={styles.elastic_features}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subtitle}>{data.subtitle}</p>
        {elasticFeaturCardComponents}
        </div>
    );
}

export default ElasticFeatures;
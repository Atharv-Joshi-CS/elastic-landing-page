import ElasticFeatureCard from "./ElasticFeatureCard";
import styles from "../styles/ElasticFeatures/ElasticFeatures.module.scss"
import React from "react";
const ElasticFeatures = (props : any) => {
    const {data} = props;

    const elasticFeaturCardComponents : React.ReactNode[]= Array.from(data.feature_description.map((card : any) => <ElasticFeatureCard data = {card}/>));
    
    return (
        <div className={styles.elastic_features}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subtitle}>{data.subtitle}</p>
        {elasticFeaturCardComponents}
        </div>
    );
}

export default ElasticFeatures;
import ElasticFeatureCard from "./ElasticFeatureCard";
const ElasticFeatures = (props : any) => {
    const {data} = props;
    // console.log(data);

    const elasticFeaturCardComponents = Array.from(data.feature_description.map((card : any) => <ElasticFeatureCard data = {card}/>));
    
    return (
        <>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        {elasticFeaturCardComponents}
        </>
    );
}

export default ElasticFeatures;
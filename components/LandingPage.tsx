import OurCustomers from "./OurCustomers";
import ReportsEventsWebinars from "./ReportsEventsWebinars";
import ElasticFeatures from "./ElasticFeatures";
import StarterProducts from "./StarterProducts";

const LandingPage = (props : any) => {
    const entry = props.data.entry;
    const modularBlocksJsonData = entry.modular_blocks;
    // console.log(modularBlocksJsonData);
    return (
        <>
            <ReportsEventsWebinars data = {modularBlocksJsonData[0].reports_events_webinars}/>
            <OurCustomers data = {modularBlocksJsonData[1].our_customers}/>
            <ElasticFeatures data = {modularBlocksJsonData[2].features_of_elastic_product}/>
            <StarterProducts data =  {modularBlocksJsonData[3].starter_products} />
            <ReportsEventsWebinars data = {modularBlocksJsonData[4].reports_events_webinars}/>
            <ReportsEventsWebinars data = {modularBlocksJsonData[5].reports_events_webinars}/>

        </>
    );
}

export default LandingPage
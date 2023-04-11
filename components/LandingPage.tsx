import OurCustomers from "./OurCustomers";
import ReportsEventsWebinars from "./ReportsEventsWebinars";
import ElasticFeatures from "./ElasticFeatures";
import StarterProducts from "./StarterProducts";

const LandingPage = (props : any) => {
    const entry = props.data.entry;
    const modularBlocksJsonData = entry.modular_blocks;
    console.log(modularBlocksJsonData);

    let blocks = Array.from(modularBlocksJsonData.map((data : any) => {
        switch(Object.keys(data)[0]){
            case 'reports_events_webinars':
                return <ReportsEventsWebinars data = {data.reports_events_webinars} type = {data.reports_events_webinars.block_type}/>;
            case 'our_customers':
                return <OurCustomers data = {data.our_customers}/>;
            case 'features_of_elastic_product':
                return <ElasticFeatures data = {data.features_of_elastic_product}/>;
            case 'starter_products':
                return <StarterProducts data =  {data.starter_products} />;
            default :
                return <StarterProducts data =  {data.starter_products} />;;
        }
    } ));
    return (
        <>
        {blocks}
        </>
    );
}

export default LandingPage
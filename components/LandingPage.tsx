import OurCustomers from "./OurCustomers";
import ReportsEventsWebinars from "./ReportsEventsWebinars";
import ElasticFeatures from "./ElasticFeatures";
import StarterProducts from "./StarterProducts";
import { LandingPageTD, ModularBlocksJSONArray} from "@/utilities/type_definitions";

const LandingPage = ({data} : {data : LandingPageTD}) => {
    const modularBlocksJsonData : ModularBlocksJSONArray = data.modular_blocks as ModularBlocksJSONArray;
    
    let blocks = Array.from(modularBlocksJsonData.map((data : any) => {
        switch(Object.keys(data)[0]){
            case 'reports_events_webinars':                
                return <ReportsEventsWebinars key={data.reports_events_webinars._metadata.uid} data = {data.reports_events_webinars} type = {data.reports_events_webinars.block_type}/>;
            case 'our_customers':
                return <OurCustomers key={data.our_customers._metadata.uid} data = {data.our_customers}/>;
            case 'features_of_elastic_product':
                return <ElasticFeatures key={data.features_of_elastic_product._metadata.uid} data = {data.features_of_elastic_product}/>;
            case 'starter_products':
                return <StarterProducts key={data.starter_products._metadata.uid} data =  {data.starter_products} />;
            default :
                return <StarterProducts key={data.starter_products._metadata.uid} data =  {data.starter_products} />;;
        }
    } ));
    return (
        <>
        {blocks}
        </>
    );
}

export default LandingPage
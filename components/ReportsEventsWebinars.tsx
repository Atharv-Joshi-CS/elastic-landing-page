import ReportsEventsWebinarsCard from "./ReportsEventsWebinarsCard";
const ReportsEventsWebinars = (props : any) => {
    const {data} = props;
    // console.log(data);
    
    const rewCardComponents = Array.from(data.card.map((card : any) => <ReportsEventsWebinarsCard data = {card}/>));    
    return (
        <>
        <h1>{data.title}</h1>
        {rewCardComponents}
        </>
        );
}

export default ReportsEventsWebinars;
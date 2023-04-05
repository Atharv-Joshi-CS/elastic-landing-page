
const ReportsEventsWebinarsCard = (props : any) => {
    const {data} = props;
    console.log(data);
    
    return(
        <>
        <h3>{data.category}</h3>
        {data.logo != null ? <img src={data.logo.url} alt=""/> : <></>}
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <a href={data.link.href}>{data.link.title}</a>
        </>
    );
}

export default ReportsEventsWebinarsCard;
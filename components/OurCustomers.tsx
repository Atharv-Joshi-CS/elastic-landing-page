import CustomerCard from "./CustomerCard";
const OurCustomers = (props : any) => {
    const {data} = props;
    const customerCardsList = Array.from(data.company_card.map((customerCardJson : any) => <CustomerCard data = {customerCardJson}/>));
    return (
    <>
        <h1>{data.title}</h1>
        <h5>{data.subtitle}</h5>
        {customerCardsList}
        <a href={data.cta.href}>{data.cta.title}</a>
    </>
    );
}

export default OurCustomers;
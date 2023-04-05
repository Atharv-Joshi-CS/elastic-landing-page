import StarterProductCard from "./StarterProductCard";
const StarterProducts = (props : any) => {
    const {data} = props;
    console.log(data);
    const productCards : React.ReactNode[] = Array.from(data.product_card.map((card : any) => <StarterProductCard data = {card}/>));
    
    return (
        <>
        <h1>{data.title}</h1>
        <h2>{data.subtitle}</h2>
        <div>
            <div>
                {productCards}
            </div>
            <a href={data.cta.href}>{data.cta.title}</a>
        </div>
        </>
        );
}

export default StarterProducts;
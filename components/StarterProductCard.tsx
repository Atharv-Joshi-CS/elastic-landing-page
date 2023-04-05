
const StarterProductCard = (props : any) => {
    const {data} = props;
    console.log(data);
    
    return (
        <>
        <div>
            <img src={data.logo.url} alt=""/>
            <h1>{data.product_name}</h1>
        </div>
        <h3>{data.description}</h3>
        </>
    );
}

export default StarterProductCard;
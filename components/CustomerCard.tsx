
const CustomerCard = (props : any) => {
    const {data} = props;
    return (
        <>
        <a href={data.link.href}>{data.link.title}</a>
        </>
    );
}

export default CustomerCard;
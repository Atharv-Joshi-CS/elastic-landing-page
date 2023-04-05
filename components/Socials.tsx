
const Socials = (props : any) => {
    const {data} = props;
    console.log(data);
    const cta : React.ReactNode[] = Array.from(data.cta.map((cta : any) => <a href={cta.cta_link.href}>icon</a> ))
    return (
        <>
        <h1>{data.title}</h1>
        <div>
            {cta}
        </div>
        </>
    );
}

export default Socials;
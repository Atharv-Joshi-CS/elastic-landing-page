
const NewsLetter = (props : any) => {
    const {data} = props;
    console.log(data);
    
    return (
        <>
        <h2>{data.title}</h2>
        <a href={data.cta.cta_link.href}>{data.cta.cta_link.title}</a>
        <div>
        <span dangerouslySetInnerHTML={{ __html: data.terms_and_conditions }} />
        </div>
        </>
    );
}

export default NewsLetter;
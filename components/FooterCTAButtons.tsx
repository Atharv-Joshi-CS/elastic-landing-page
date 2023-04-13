
const FooterCTALinks = (props : any) => {
    const {data} = props;
    const cta : React.ReactNode[] = Array.from(data.map((cta : {cta_link:{title : string, href : string}, _metadata : {uid : string}}) => <a key={cta._metadata.uid} href={cta.cta_link.href}>{cta.cta_link.title}</a> ))
    return (
        <div>
        {cta}
        </div>
    );
}

export default FooterCTALinks;
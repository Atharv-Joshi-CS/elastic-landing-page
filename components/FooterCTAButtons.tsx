
const FooterCTALinks = (props : any) => {
    const {data} = props;
    const cta : React.ReactNode[] = Array.from(data.map((cta : any) => <a href={cta.cta_link.href}>{cta.cta_link.title}</a> ))
    return (
        <>
        {cta}
        </>
    );
}

export default FooterCTALinks;
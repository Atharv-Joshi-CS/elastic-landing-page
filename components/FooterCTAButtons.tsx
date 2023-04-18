import { CTAButtonTD } from "@/utilities/type_definitions";

const FooterCTALinks = ({data} :  {data : Array<CTAButtonTD>}) => {
    const cta : React.ReactNode[] = Array.from(
        data.map((cta : {cta_link:{title : string, href : string}, _metadata : {uid : string}}) =>
        !cta._metadata.uid || !cta.cta_link.title ? <></> : <a key={cta._metadata.uid} href={cta.cta_link.href}>{cta.cta_link.title}</a> ))
    return (
        <div>
        {cta}
        </div>
    );
}

export default FooterCTALinks;
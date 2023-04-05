import React from "react";

const SectionNavigationLinks = (props : any) => {
    const {data} = props;
    console.log(data);
    const cta : React.ReactNode[] = Array.from(data.cta.map((cta : any) => <a href={cta.cta_link.href}>{cta.cta_link.title}</a> ))
    return (
        <>
        <h4>{data.title}</h4>
        <div>
            {cta}
        </div>
        </>
    );
}

export default SectionNavigationLinks
import React from "react";
import CustomerCard from "./CustomerCard";
import PrimaryButton from "./PrimaryButton";
import { OurCustomersTD, CustomerCardTD } from "@/utilities/type_definitions";
import styles from "../styles/OurCustomers/OurCustomer.module.scss";

const OurCustomers = ({data} : {data : OurCustomersTD}) => {
    const customerCardsList : React.ReactNode[] = Array.from(data.company_card.map((customerCardJson : CustomerCardTD) => !customerCardJson ? <></> : <CustomerCard key={customerCardJson._metadata.uid} data = {customerCardJson}/>));
    return (
    <div className={styles.ourCustomers_container}>
        {!data.title || data.title === '' ? <></> : <p className={styles.title}>{data.title}</p>}
        {!data.subtitle || data.subtitle === '' ? <></> : <p className={styles.subtitle}>{data.subtitle}</p>}
        <div className={styles.customerCardList_container}>
            {customerCardsList}
        </div>
        {!data.cta.title || !data.cta.href ? <></> : <PrimaryButton hasDisplayText = {true} hasArrow = {true} displayText={data.cta.title} href={data.cta.href} imgSrc="/static/images/right-arrow.svg"/>}
    </div>
    );
}

export default OurCustomers;
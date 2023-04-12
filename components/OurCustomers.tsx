import React from "react";
import CustomerCard from "./CustomerCard";
import PrimaryButton from "./PrimaryButton";
import styles from "../styles/OurCustomers/OurCustomer.module.scss";

const OurCustomers = (props : any) => {
    const {data} = props;
    const customerCardsList : React.ReactNode[] = Array.from(data.company_card.map((customerCardJson : any) => <CustomerCard data = {customerCardJson}/>));
    return (
    <div className={styles.ourCustomers_container}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subtitle}>{data.subtitle}</p>
        <div className={styles.customerCardList_container}>
            {customerCardsList}
        </div>
        <PrimaryButton hasDisplayText = {true} hasArrow = {true} displayText={data.cta.title} href={data.cta.href} imgSrc="/static/images/right-arrow.svg"/>
    </div>
    );
}

export default OurCustomers;
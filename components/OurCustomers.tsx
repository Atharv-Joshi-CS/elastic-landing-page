import React from "react";
import CustomerCard from "./CustomerCard";
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
        <a className={styles.button_primary} href={data.cta.href}>
            <div className={styles.button_display_content}>
                {data.cta.title}
                <img className="arrow-right" src="/static/images/right-arrow.svg" />
            </div>
        </a>
    </div>
    );
}

export default OurCustomers;
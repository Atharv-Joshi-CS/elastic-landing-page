import styles from "../styles/OurCustomers/OurCustomer.module.scss";
import { CustomerCardTD } from "@/utilities/type_definitions";
const CustomerCard = ({data} : {data : CustomerCardTD }) => {
    
    return (
        <div key={data._metadata.uid} className={styles.customer_card}>
        {!data.link.href ? <></> : <a href={data.link.href}>
            {!data.logo.url ? <></> : <img className={styles.logo} src={data.logo.url} alt="customer logo"/>}
        </a>}
        </div>
    );
}

export default CustomerCard;
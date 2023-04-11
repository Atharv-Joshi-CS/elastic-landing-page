import styles from "../styles/OurCustomers/OurCustomer.module.scss";

const CustomerCard = (props : any) => {
    const {data} = props;
    
    return (
        <div className={styles.customer_card}>
        <a href={data.link.href}>
            <img className={styles.logo} src={data.logo.url} alt="customer logo"/>
        </a>
        </div>
    );
}

export default CustomerCard;
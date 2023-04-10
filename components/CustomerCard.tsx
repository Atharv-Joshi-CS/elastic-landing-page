import styles from "../styles/OurCustomers/OurCustomer.module.scss";

const CustomerCard = (props : any) => {
    const {data} = props;
    console.log(data);
    
    return (
        <div className={styles.customer_card}>
        <a href={data.link.href}>
            <img src={data.logo.url} alt="customer logo" width={150} />
        </a>
        </div>
    );
}

export default CustomerCard;
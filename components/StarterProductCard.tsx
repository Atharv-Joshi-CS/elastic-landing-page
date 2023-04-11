import styles from "../styles/StarterProducts/StarterProducts.module.scss";

const StarterProductCard = (props : any) => {
    const {data} = props;
    
    return (
        <div className={styles.starter_product_card}>
            <img src={data.logo.url} alt="logo"/>
            <div className={styles.subsection}>
                <h3 className={styles.card_title}>{data.product_name}</h3>
                <p className={styles.card_subtitle}>{data.description}</p>
            </div>
        </div>
    );
}

export default StarterProductCard;
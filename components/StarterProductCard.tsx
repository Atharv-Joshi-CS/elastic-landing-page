import styles from "../styles/StarterProducts/StarterProducts.module.scss";
import { StarterProductCardTD } from "@/utilities/type_definitions";
const StarterProductCard = ({data} : {data : StarterProductCardTD}) => {
    
    return (
        <div key={data._metadata.uid} className={styles.starter_product_card}>
            {!data.logo.url ? <></> : <img src={data.logo.url} alt="logo"/>}
            <div className={styles.subsection}>
                {!data.product_name  || data.product_name === '' ? <></> : <h3 className={styles.card_title}>{data.product_name}</h3>}
                {!data.description || data.description === '' ? <></> : <p className={styles.card_subtitle}>{data.description}</p>}
            </div>
        </div>
    );
}

export default StarterProductCard;
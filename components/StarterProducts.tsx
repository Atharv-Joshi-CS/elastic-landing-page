import StarterProductCard from "./StarterProductCard";
import styles from "../styles/StarterProducts/StarterProducts.module.scss";

const StarterProducts = (props : any) => {
    const {data} = props;
    const productCards : React.ReactNode[] = Array.from(data.product_card.map((card : any) => <StarterProductCard data = {card}/>));
    
    return (
        <div className={styles.starter_products}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.subtitle}>{data.subtitle}</p>
        <div className={styles.section_body}>
            <div className={styles.product_cards_container}>
                {productCards}
            </div>
                <a className={styles.button_primary} href={data.cta.href}>
                    <div className={styles.button_display_content}>
                        {data.cta.title}
                        <img width={25} src="/static/images/right-arrow.svg" />
                    </div>
                </a>
        </div>
        </div>
        );
}

export default StarterProducts;
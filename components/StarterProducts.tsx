import StarterProductCard from "./StarterProductCard";
import PrimaryButton from "./PrimaryButton";
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
                <div className={styles.arrow_translate}>
                    <PrimaryButton href={data.cta.href} hasArrow = {true} hasDisplayText = {true} displayText= {data.cta.title} imgSrc="/static/images/right-arrow.svg"/>
                </div>
        </div>
        </div>
        );
}

export default StarterProducts;
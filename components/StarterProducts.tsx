import StarterProductCard from "./StarterProductCard";
import PrimaryButton from "./PrimaryButton";
import { StarterProductsTD, StarterProductCardTD } from "@/utilities/type_definitions";
import styles from "../styles/StarterProducts/StarterProducts.module.scss";

const StarterProducts = ({data} : {data : StarterProductsTD}) => {

    const productCards : React.ReactNode[] = Array.from(data.product_card.map((card : StarterProductCardTD) => <StarterProductCard key={card._metadata.uid} data = {card}/>));
    
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
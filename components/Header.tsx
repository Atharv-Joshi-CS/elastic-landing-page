import React from "react";
import { HeaderTD, CTAButtonTD } from "@/utilities/type_definitions";
import styles from "../styles/Header/Header.module.scss"

const Header = ({data} : {data : HeaderTD}) => {
    
    let navigatonButtons : React.ReactNode[] = Array.from(data.cta_buttons.map((button : CTAButtonTD) => <a className={button.button_type === "PRIMARY" ? styles.primary_button : `secondary_button ${styles.secondary_btn_padding}` } href={button.cta_link.href}>{button.cta_link.title}</a>)) 
    navigatonButtons.push(<a className={styles.image_button}><img className={styles.image_button} src="/static/images/icon-magnifying-glass-24-blue.svg" alt="search icon" /></a>)
    
    return (
        <div>
            <div className={styles.header_container}>
                <img className={styles.logo} src={data.logo.url} alt="logo" />
                <div className={styles.navigation_buttons}>
                {navigatonButtons}
                </div>
            </div>
            <hr className={styles.hr} />
        </div>

    );
}

export default Header
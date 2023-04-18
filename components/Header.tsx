import React from "react";
import { HeaderTD, CTAButtonTD } from "@/utilities/type_definitions";
import styles from "../styles/Header/Header.module.scss"

const Header = ({data} : {data : HeaderTD}) => {
    
    let navigatonButtons : React.ReactNode[] = Array.from(
        data.cta_buttons.map(
        (button : CTAButtonTD) => 
        !button._metadata.uid || !button.cta_link.href || !button.cta_link.title ? <></> :  <a key={button._metadata.uid} className={button.button_type === "PRIMARY" ? styles.primary_button : `secondary_button ${styles.secondary_btn_padding}` } href={button.cta_link.href}>{button.cta_link.title}</a>)) 
    navigatonButtons.push(<a key="search_btn" className={styles.image_button}><img className={styles.image_button} src="/static/images/icon-magnifying-glass-24-blue.svg" alt="search icon" /></a>)
    let isTabletMode = false;
    if(typeof window !== 'undefined'){
        isTabletMode = window.innerWidth <= 768 ? true : false;
    }
    return (
        <div>
            <div className={styles.header_container}>
                {!data.logo.url ? <></> : <img className={styles.logo} src={data.logo.url} alt="logo" />}
                <div className={styles.navigation_buttons}>
                {navigatonButtons}
                </div>
                {isTabletMode ? <a key="search_btn" className={styles.image_button}><img className={styles.image_button} src="/static/images/icon-magnifying-glass-24-blue.svg" alt="search icon" /></a> : <></>}
            </div>
            <hr className={styles.hr} />
        </div>

    );
}

export default Header
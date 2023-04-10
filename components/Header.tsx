import React from "react";
import type headerStylesType from "../styles/Header/Header.module";
import styles from "../styles/Header/Header.module.scss"

const Header = (props : any) => {
    const data = props.data.entry;
    console.log(data.cta_buttons);

    const navigatonButtons : React.ReactNode[] = Array.from(data.cta_buttons.map((button : any) => <a className={button.button_type === "PRIMARY" ? styles.button_primary : styles.button_secondary } href={button.cta_link.href}>{button.cta_link.title}</a>)) 
    
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
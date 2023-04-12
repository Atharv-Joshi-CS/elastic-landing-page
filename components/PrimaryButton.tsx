import { PrimaryButtonTD } from "@/utilities/type_definitions";

const PrimaryButton = ({displayText, href, hasArrow, hasDisplayText, imgSrc} : PrimaryButtonTD) => {
    return (
        <a className={`primary_button`} href={href}>
            <div className="primary_button_display_content">
                {hasDisplayText ?  displayText : ""}
                {hasArrow ? <img src={imgSrc} /> : <></>}
            </div>
        </a>
    );
}

export default PrimaryButton;
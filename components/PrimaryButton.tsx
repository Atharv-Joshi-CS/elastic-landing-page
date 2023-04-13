import { PrimaryButtonTD } from "@/utilities/type_definitions";

const PrimaryButton = ({displayText, href, hasArrow, hasDisplayText, imgSrc} : PrimaryButtonTD) => {
    return (
        <div className={`primary_button`}>
            <div className="primary_button_display_content">
                {hasDisplayText ?  displayText : ""}
                {hasArrow ? <img src={imgSrc} /> : <></>}
            </div>
        </div>
    );
}

export default PrimaryButton;
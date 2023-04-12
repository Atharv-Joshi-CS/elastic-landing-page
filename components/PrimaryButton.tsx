interface ButtonProps {
    displayText : string,
    href : string,
    hasArrow : boolean,
    hasDisplayText : boolean
    imgSrc : string
}

const PrimaryButton = (props : ButtonProps) => {
    const {displayText, href, hasArrow, hasDisplayText, imgSrc} = props;
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
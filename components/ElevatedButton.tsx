
interface ButtonProps {
    displayText : string,
    href : string,
}

const ElevatedButton = (props : ButtonProps) => {
    const {displayText, href} = props;
    return (
        <div>
            <a href={href}>{displayText}</a>
        </div>
    );
}

export default ElevatedButton;
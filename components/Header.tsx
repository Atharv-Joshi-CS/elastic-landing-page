const Header = (props : any) => {
    const data = props.data.entry;
    console.log(data);

    const navigatonButtons = Array.from(data.cta_buttons.map((button : any) => <a href={button.cta_link.href}>{button.cta_link.title}</a>)) 
    
    return (
        <>
            <img src={data.logo.url} alt="logo" />
            {navigatonButtons}
        </>
    );
}

export default Header
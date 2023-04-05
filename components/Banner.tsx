import ElevatedButton from "./ElevatedButton";

const Banner = (props : any) => {
    const entry = props.data.entry;
    console.log(entry);
    return (
        <>
            <h1>{entry.title}</h1>
            <h3>{entry.subtitle}</h3>
            <ElevatedButton displayText={entry.cta.cta_link.title} href={entry.cta.cta_link.href} ></ElevatedButton>
        </>
    );
}

export default Banner

const ElasticFeatureCard = (props : any) => {
    const {data} = props;
    console.log(data);
    
    return (
        <>
        <div>
            <img src={data.logo.url} alt=""/>
            <h1>{data.title}</h1>
            <h2>{data.subtitle}</h2>
            <h3>{data.description}</h3>
            <a href={data.cta.href}>{data.cta.title}</a>
            <div>
                <p>{data.testimonial.value_proposition}</p>
                <div>

                    {data.testimonial.logo != null ? <img src={data.testimonial.logo.url} alt=""/> : <></>}
                    <p>{data.testimonial.employee_position}</p>
                </div>
            </div>
        </div>
        <div>
            {data.video != null ? 	<video width="640" height="360" autoPlay muted loop>
		<source src={data.video.url} type="video/mp4"/>
		Your browser does not support the video tag.
	</video> : <></>}
        </div>
        </>
    );
}

export default ElasticFeatureCard;
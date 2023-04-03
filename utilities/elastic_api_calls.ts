import axios from "axios";

export default class APICalls{

    private headers = {
        "api_key" : process.env.API_KEY,
        "access_token" : process.env.ACCESS_TOKEN,
        "Content-Type" : "application/json"
    };


    private getUrl = (contentTypeUid : string, entryUid : string, environment : string) => {
    return `https://${process.env.BASE_URL}/v3/content_types/${contentTypeUid}/entries/${entryUid}?environment=${environment}`;
    } 

    public getLandingPageData = async () => {
        const headerRequest = axios.get(this.getUrl("elastic_header","blt2b854e990c511e72","aj-dev"), {headers: this.headers})
        const footerRequest = axios.get(this.getUrl("footer","blt9dc59bcd9655739f","aj-dev"), {headers: this.headers})
        const bannerRequest = axios.get(this.getUrl("elastic_banner","blt7fd0565eb551d1a7","aj-dev"), {headers: this.headers})
        const landinPageRequest = axios.get(this.getUrl("elastic_landing_page","blt9794129823ec773b","aj-dev"), {headers: this.headers})

        const [headerResponse, footerResponse, bannerResponse, landingPageResponse] = await axios.all([headerRequest, footerRequest, bannerRequest, landinPageRequest]);

        return ({
            headerResponse : headerResponse.data,
            footerResponse : footerResponse.data,
            bannerResponse : bannerResponse.data,
            landingPageResponse : landingPageResponse.data
        });
        
    }
}
import Banner from '@/components/Banner';
import LandingPage from '@/components/LandingPage';
import {BannerTD, LandingPageTD } from '@/utilities/type_definitions';
import {getEntries} from "../utilities/elastic_api_calls"


interface LandingPageData {
  banner : BannerTD,
  landingPage : LandingPageTD
}


const Home = ({banner, landingPage} : LandingPageData) => {  
  return (
    <div>
    {!banner ? <></> : <Banner data = {banner}></Banner>}
    {!landingPage ? <></> : <LandingPage data = {landingPage}></LandingPage>}
    </div>
  )
}

export async function getStaticProps(){
  const banner : BannerTD = await getEntries('elastic_banner', 'blt7fd0565eb551d1a7', 'en-us');
  const landingPage : LandingPageTD = await getEntries('elastic_landing_page', 'blt9794129823ec773b', 'en-us');
  

  return {
    "props" : {
      banner,
      landingPage
    }
  };
}

export default Home

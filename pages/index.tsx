import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import LandingPage from '@/components/LandingPage';
import { HeaderTD, BannerTD, FooterTD, LandingPageTD } from '@/utilities/type_definitions';
import {getEntries} from "../utilities/elastic_api_calls"


interface LandingPageData {
  header : HeaderTD,
  footer : FooterTD,
  banner : BannerTD,
  landingPage : LandingPageTD
}


const Home = ({header, footer, banner, landingPage} : LandingPageData) => {  
  return (
    <div>
    <Header data = {header}></Header>
    <Banner data = {banner}></Banner>
    <LandingPage data = {landingPage}></LandingPage>
    <Footer data = {footer}></Footer>
    </div>
  )
}

export async function getStaticProps(){
  const header = await getEntries('elastic_header', 'blt2b854e990c511e72', 'en-us');
  const footer = await getEntries('footer', 'blt9dc59bcd9655739f', 'en-us');
  const banner = await getEntries('elastic_banner', 'blt7fd0565eb551d1a7', 'en-us');
  const landingPage = await getEntries('elastic_landing_page', 'blt9794129823ec773b', 'en-us');
  

  return {
    "props" : {
      header,
      footer,
      banner,
      landingPage
    }
  };
}

export default Home

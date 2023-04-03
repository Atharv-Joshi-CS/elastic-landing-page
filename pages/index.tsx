import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import LandingPage from '@/components/LandingPage';
import APICalls from '@/utilities/elastic_api_calls';
import styles from '@/styles/Home.module.css'

interface LandingPageData {
  headerResponse : any,
  footerResponse : any,
  bannerResponse : any,
  landingPageResponse : any
}


const Home = (props : LandingPageData) => {
  return (
    <>
    <Header data = {props.headerResponse}></Header>
    <Banner data = {props.bannerResponse}></Banner>
    <LandingPage data = {props.landingPageResponse}></LandingPage>
    <Footer data = {props.footerResponse}></Footer>
    </>
  )
}

export async function getStaticProps(){
  const apiCalls = new APICalls();

  const data = await apiCalls.getLandingPageData();
  return {
    "props" : data
  };
}

export default Home

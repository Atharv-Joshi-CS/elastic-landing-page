import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Banner from '@/components/Banner';
import LandingPage from '@/components/LandingPage';

import styles from '@/styles/Home.module.css'


const Home = (props : Object) => {
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <LandingPage></LandingPage>
    <Footer></Footer>
    </>
  )
}

export function getStaticProps(){
  return {
    "props" : {}
  };
}

export default Home

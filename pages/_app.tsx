import type { AppProps } from 'next/app'
import {getEntries} from "../utilities/elastic_api_calls"
import { HeaderTD, FooterTD } from '@/utilities/type_definitions';
import "../styles/globals/globals.scss";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface HeaderFooterTD {
  header : HeaderTD,
  footer : FooterTD
}

function App({ Component, pageProps, header, footer }: AppProps & HeaderFooterTD) {
  return (
    <>
      <Header data = {header}></Header>
      <Component {...pageProps} />
      <Footer data = {footer}></Footer>
    </>
  )
}

App.getInitialProps = async () => {
  
  const header = await getEntries('elastic_header', 'blt2b854e990c511e72', 'en-us');
  const footer = await getEntries('footer', 'blt9dc59bcd9655739f', 'en-us');
  
  return {
      header,
      footer
  }
}

export default App
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  const styleObject = {
    padding : '0px',
    margin : '0px'
  }

  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/elasticsearch.ico" type="image/x-icon" />
        <link rel="icon" href="/images/elasticsearch.ico" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

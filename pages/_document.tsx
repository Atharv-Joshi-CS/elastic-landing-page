import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {

  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/images/elasticsearch.ico" type="image/x-icon" />
        <link rel="icon" href="/images/elasticsearch.ico" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

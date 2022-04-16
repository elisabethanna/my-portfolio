import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <meta property="og:url" content="https://annaerikssons.com/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Anna Eriksson - Portfolio" />
          <meta property="og:description" content="Anna's personal website." />
          <meta
            property="og:image"
            content="https://annaerikssons.com/thumbnail.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

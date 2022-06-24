import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>

          <meta name="theme-color" content="#000" />


          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='w-screen overflow-x-clip selection:bg-white selection:text-black bg-black'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

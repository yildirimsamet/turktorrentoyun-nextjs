import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="tr">
        <Head />
        <head>
          <script
            data-ad-client="ca-pub-2743431608715099"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-YY2SRNP58L`}
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YY2SRNP58L', {
              page_path: window.location.pathname,
            });
          `,
            }}
          ></script>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

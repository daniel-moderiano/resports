import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <Script
          src="https://apis.google.com/js/api.js"
          strategy='afterInteractive'
          onError={(e) => console.error('Script failed to load', e)}
          onLoad={() => console.log('Script loaded')}
        /> */}
        <script src="https://apis.google.com/js/api.js"></script>
      </body>
    </Html>
  )
}
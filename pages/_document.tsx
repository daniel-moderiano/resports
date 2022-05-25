import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script src="https://apis.google.com/js/api.js"></script>
      </body>
    </Html>
  )
}
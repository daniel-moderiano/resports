import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  console.log('Running doc.ts');

  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
        <script id="gapi-script" src="https://apis.google.com/js/api.js" async></script>
      </body>
    </Html>
  )
}
/* global gapi */

import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  function start() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': process.env.GOOGLE_API_KEY,
    }).then(function () {
      // 3. Initialize and make the API request.
      // return gapi.client.request({
      //   'path': 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&q=travel&type=channel',
      console.log('API initialised');

    })
    // }).then(function (response) {
    //   console.log(response.result);
    // }, function (reason) {
    //   console.log('Error: ' + reason.result.error.message);
    // });
    console.log('Start func');

  };

  // gapi.load('client', start)
  useEffect(() => {
    if (typeof gapi === 'undefined') {
      console.log('GAPI loading...');
    } else {
      console.log('GAPI loaded');
      gapi.load('client', start);
    }
  }, [])

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>Hello</div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

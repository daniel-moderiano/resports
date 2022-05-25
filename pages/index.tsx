/* global gapi */

import Head from 'next/head';
import { useEffect } from 'react';


interface ChannelResult {
  kind: string;
  etag: string;
  nextPageToken?: string;
  prevPageToken?: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  }
  items: [];
};

export default function Home() {
  function starter() {
    // 2. Initialize the JavaScript client library.
    gapi.client.init({
      'apiKey': process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
    }).then(function () {
      // 3. Initialize and make the API request.
      return gapi.client.request({
        'path': 'https://youtube.googleapis.com/youtube/v3/channels',
        params: {
          id: 'UCj1J3QuIftjOq9iv_rr7Egw',
          part: 'contentDetails, snippet'
        }
      })
    }).then(function (response) {
      console.log(response.result);
    }, function (reason) {
      console.log('Error: ' + reason.result.er);
    });
  };

  const start = async () => {
    // Initialise a Google API client with the provided API key
    await gapi.client.init({
      'apiKey': process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
    });

    // Make an API request
    try {
      const response = await gapi.client.request({
        'path': 'https://youtube.googleapis.com/youtube/v3/channels',
        params: {
          id: 'UCj1J3QuIftjOq9iv_rr7Egw',
          part: 'contentDetails, snippet'
        }
      });

      console.log(response.result);
    } catch (error) {
      // The vast majority of errors will be HTTP errors (400, 404, 403, etc.), in which case the response object will still be provided, but with an result.error property
      if (typeof error === 'object' && error !== null) {     // HTTP error has occurred
        console.log(error.result.error.message);
      }
    }
  }



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

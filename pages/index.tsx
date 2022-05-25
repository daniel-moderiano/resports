import { useGapiClient } from 'hooks/useGapiClient';
import Head from 'next/head';
import Link from 'next/link';
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
  useGapiClient();

  const makeRequest = async () => {
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
      } else {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>Hello</div>
        <Link href="/test"><a>Test page</a></Link>
      </main>

      <footer>
      </footer>
    </div>
  )
}

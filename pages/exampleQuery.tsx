import { useGapiContext } from 'context/GapiContext';
import { useEffect } from 'react';
import { useQuery } from 'react-query'

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
}

// Example component encasing a GAPI query
export default function Example() {
  const { gapiClientReady } = useGapiContext();

  const { isLoading, isError, data, error, isIdle } = useQuery(['request'], async () => {
    // GAPI client will throw it's own error if there is a problem with the request, there is no need for a specific try/catch here
    const response = await gapi.client.request({
      'path': 'https://youtube.googleapis.com/youtube/v3/channels',
      params: {
        id: 'UCj1J3QuIftjOq9iv_rr7Egw',
        part: 'contentDetails, snippet'
      }
    });

    // Successful response can be safely assigned to the ChannelResult type here
    return response.result as ChannelResult;
  }, {
    enabled: gapiClientReady,
  });

  useEffect(() => {
    if (data) {
      console.log('Loaded');

      console.log(data);
    }

    if (isLoading) {
      console.log('Loading...');
    }

    if (error) {
      console.log(error);
    }

    if (isIdle) {
      console.log('Awaiting client to be ready');
    }
  }, [data, isLoading, error, isIdle])

  return (
    <div>
      <h2>Example</h2>
    </div>
  )
}

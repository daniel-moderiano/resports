// This hook contains an empty dependency array to ensure the Google API client is only initialised once and should then on be available to the whole application.
import { useGapiContext } from "context/GapiContext";
import { useEffect } from "react";

//! Consider checking for the gapi_processed="true" on the script tag instead? And attempt rechecks when it is false/undefined

export const useGapiClient = () => {
  const { gapiClientReady, setGapiClientReady } = useGapiContext();

  useEffect(() => {
    // Initialises an instance of the GAPI client using the provided API key. If OAuth is required, these credentials may be provided here.
    const initialiseGapi = () => {
      gapi.client.init({
        'apiKey': process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      })
        // TODO: Determine what to do here
        .then(() => console.log('GAPI initialised'))
        .catch(err => console.log(err))
    };

    // Check that the GAPI script has loaded and is available. Because of the server-side rendering, theoretically there shouldn't be a case where this hook is called before the GAPI script has initialised?
    if (typeof gapi === 'undefined') {
      // TODO: Determine what to do here
      console.error('GAPI script unavailable');
    } else {
      if (!gapiClientReady) {   // GAPI client has not previously been initialised
        gapi.load('client', initialiseGapi);
        setGapiClientReady(true);
      }
    }
  }, [gapiClientReady, setGapiClientReady]);
}

// This hook contains an empty dependency array to ensure the Google API client is only initialised once and should then on be available to the whole application.
import { useEffect } from "react";

export const useGapiClient = () => {
  useEffect(() => {
    // Initialises an instance of the GAPI client using the provided API key. If OAuth is required, these credentials may be provided here.
    const initialiseGapi = async () => {
      await gapi.client.init({
        'apiKey': process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
      });

      console.log('GAPI initialised');
    };

    // Check that the GAPI script has loaded and is available. Because of the server-side rendering, theoretically there shouldn't be a case where this hook is called before the GAPI script has initialised?
    if (typeof gapi === 'undefined') {
      console.log('GAPI script unavailable');
    } else {
      console.log('GAPI script loaded');
      gapi.load('client', initialiseGapi);
    }
  }, []);
}

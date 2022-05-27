import * as React from 'react';

interface GapiContextInterface {
  gapiClientReady: boolean;
  setGapiClientReady: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create an instance of React Context. Default GAPI loaded state should be false until the API has loaded.
export const GapiContext = React.createContext<GapiContextInterface | null>(null);

// Provide an indication of whether the GAPI client is ready to make API requests or not
export const GapiContextProvider = (children: React.ReactNode) => {
  // gapiClientReady is the key boolean value that will be required by most YouTube-related components. The setGapi function is required by the GAPI initialisation component only
  const [gapiClientReady, setGapiClientReady] = React.useState(false);

  return (
    <GapiContext.Provider value={{ gapiClientReady, setGapiClientReady }}>
      {children}
    </GapiContext.Provider>
  )
}

// Custom hook to allow components to access the context
export const useGapiContext = () => {
  const context = React.useContext(GapiContext);

  // Can optionally add conditional here to ensure GAPI context is used only by those components wrapped in a GAPI context provider

  return context;
}
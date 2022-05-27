import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { GapiContextProvider } from 'context/GapiContext'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
const queryClient = new QueryClient()

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GapiContextProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </GapiContextProvider>
  )
}

import '@/styles/global.css';
import Layout from '@/components/layout/Layout';
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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </GapiContextProvider>
  )
}

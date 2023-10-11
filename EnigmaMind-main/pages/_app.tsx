import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import AppProvider from 'context/appContext';
import SanityLoader from '@/components/SanityLoader';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <AppProvider>
      <SanityLoader>
        <NextNProgress color='#fa5b2e' />
        <Component {...pageProps} />
      </SanityLoader>
    </AppProvider>
  </>
}

export default MyApp

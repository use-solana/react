import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react';
import { SolanaStateProvider } from '../../../dist/context';
// import { SolanaStateProvider } from '../../../dist';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <SolanaStateProvider>
        <Component {...pageProps} />
      </SolanaStateProvider>
    </StrictMode>
  );
}

export default MyApp

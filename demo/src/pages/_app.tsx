import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StrictMode } from 'react';
import { PRODUCTION } from '../utils/globs';

console.log({ PRODUCTION })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <Component {...pageProps} />
    </StrictMode>
  );
}

export default MyApp

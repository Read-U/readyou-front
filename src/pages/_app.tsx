import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/global-styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

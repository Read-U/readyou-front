import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@/styles/global-styles';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { ToastContextProvider } from '@/shared/hooks/useToast/ToastContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContextProvider>
        <Component {...pageProps} />
      </ToastContextProvider>
    </ThemeProvider>
  );
}

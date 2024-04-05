import "@/styles/globals.css";
import { Fragment } from "react";
import type { AppProps } from "next/app";
import { GlobalStyle } from "@/styles/global-styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <GlobalStyle />
      <Component {...pageProps} />;
    </Fragment>
  );
}

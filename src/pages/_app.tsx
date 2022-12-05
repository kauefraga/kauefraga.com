/* eslint-disable @next/next/no-script-component-in-head */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kaue Fraga Rodrigues</title>
        <link rel="icon" type="image/png" href="https://github.com/kauefraga.png" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8455364319195819"
     crossOrigin="anonymous"></Script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

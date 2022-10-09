import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kaue Fraga Rodrigues</title>
        <link rel="icon" type="image/png" href="https://github.com/kauefraga.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

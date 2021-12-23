import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Yaic!</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;

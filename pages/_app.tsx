import Head from 'next/head';

import Layout from '../components/layout/Layout';
import type { AppProps } from 'next/app';

import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Anaconda</title>
        <meta name="description" content="Anaconda" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

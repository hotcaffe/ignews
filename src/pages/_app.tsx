import { AppProps } from "next/app";
import { Header } from "../components/Header";
import {SessionProvider} from 'next-auth/react'
import Head from "next/head";
import '../styles/global.scss';

function MyApp({ Component, pageProps}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <title>Ig.news</title>
      </Head>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;

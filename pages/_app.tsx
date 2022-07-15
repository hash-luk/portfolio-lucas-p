import type { AppProps } from "next/app";
import Head from "next/head";
import '../styles/fonts.css';

function MyApp({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Lucas Patrick &bull; Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Portfólio Lucas Patrick."/>
      </Head>
      <Component />
    </>
  );
}

export default MyApp;

import type { AppProps } from "next/app";
import Head from "next/head";
import '../styles/fonts.css';

function MyApp({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Lucas Patrick &bull; Dev</title>
      </Head>
      <Component />
    </>
  );
}

export default MyApp;

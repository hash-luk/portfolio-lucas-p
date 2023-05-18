import type { AppProps } from "next/app";
import { NTR } from 'next/font/google';
import Head from "next/head";

const ntr = NTR({
  weight: '400',
  subsets: ['latin']
})

function MyApp({ Component }: AppProps) {
  return (
    <main className={ntr.className}>
      <Head>
        <title>Lucas Patrick &bull; Dev</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="Portfólio Lucas Patrick."/>
      </Head>
      <Component />
    </main>
  );
}

export default MyApp;

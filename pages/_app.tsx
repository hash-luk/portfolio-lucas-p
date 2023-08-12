import type { AppProps } from "next/app";
import { Inter } from 'next/font/google';
import Head from "next/head";

const inter = Inter({
  weight: ["100", "200", "400", "600", "700"],
  subsets: ['latin']
})



function MyApp({ Component }: AppProps) {
  return (
    <main className={inter.className}>
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

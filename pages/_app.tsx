import type { AppProps } from "next/app";
import { Inter } from 'next/font/google';
import Head from "../app/head";

const inter = Inter({
  weight: ["100", "200", "400", "600", "700"],
  subsets: ['latin']
})

function MyApp({ Component }: AppProps) {
  return (
    <main className={inter.className}>
      <Head />
      <Component />
    </main>
  );
}

export default MyApp;

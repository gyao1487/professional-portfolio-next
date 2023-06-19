import "@/styles/globals.css";
import { Work_Sans } from "next/font/google";
import Head from "next/head";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-ws",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`${workSans.variable} font-ws bg-light w-full m-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

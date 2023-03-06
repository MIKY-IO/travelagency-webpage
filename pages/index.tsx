import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Vietnam from "../components/Vietnam/Vietnam";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Q2-VIETNAM</title>
        <link rel="icon" href="/FAV.png" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Vietnam />
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://miky-io.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by MIKY-IO | 2023
        </a>
      </footer>
    </div>
  );
};

export default Home;

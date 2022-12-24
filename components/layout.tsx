import Head from "next/head";
import React from "react";
import PageFooter from "./Footer/PageFooter";
import Navbar from "./Navigation/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Max - Portfolio</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <PageFooter />
    </>
  );
}

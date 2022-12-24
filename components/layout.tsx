import Head from "next/head";
import React from "react";
import PageFooter from "./Footer/PageFooter";
import PageNavbar from "./Navigation/PageNavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Max - Portfolio</title>
      </Head>
      <header>
        <PageNavbar />
      </header>
      <main>
        {children}
      </main>
      <PageFooter />
    </>
  );
}

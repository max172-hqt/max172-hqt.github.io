import Head from "next/head";
import React from "react";
import PageFooter from "../Footer/PageFooter";
import PageNavbar from "../Navigation/PageNavbar";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Max Tran</title>
        <meta
          name="description"
          content="Max is a Frontend Engineer with skills in React, NodeJS, Web Design and Software Testing. Currently, Max a student at Fanshawe College taking the Post-graduate program in Mobile Application Development."
        />
      </Head>
      <PageNavbar />
      <main>
        {children}
      </main>
      {/* <PageFooter /> */}
    </div>
  );
}

import Head from "next/head";
import React from "react";
import PageFooter from "./PageFooter";
import PageNavbar from "./PageNavbar";
import { useRouter } from "next/router";
import LeetcodeSidebar from "./LeetcodeSidebar";

export default function Layout({ children }: { children: React.ReactElement }) {
  const router = useRouter();

  if (router.pathname.startsWith("/leetcodes")) {
    return (
      <div className="grid min-h-screen grid-rows-header">
        <div className="sticky top-0 bg-white border-b border-gray-200">
          <PageNavbar />
        </div>
        <div className="grid md:grid-cols-sidebar">
          <LeetcodeSidebar />
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto">
        <Head>
          <title>Max Tran</title>
          <meta
            name="description"
            content="Max is a Frontend Engineer with skills in React, NodeJS, Web Design and Software Testing. Currently, Max a student at Fanshawe College taking the Post-graduate program in Mobile Application Development."
          />
        </Head>
        <PageNavbar />
        <main>{children}</main>
      </div>
      <PageFooter />
    </>
  );
}

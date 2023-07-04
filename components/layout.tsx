import Head from "next/head";
import React, { useState } from "react";
import PageFooter from "./PageFooter";
import PageNavbar from "./PageNavbar";
import { useRouter } from "next/router";
import LeetcodeSidebar from "./LeetcodeSidebar";

export default function Layout({ children }: { children: React.ReactElement }) {
  const router = useRouter();
  const [sidenavOpen, setSidenavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Max Tran</title>
        <meta
          name="description"
          content="Max is a Frontend Engineer with skills in React, NodeJS, Web Design and Software Testing. Currently, Max a student at Fanshawe College taking the Post-graduate program in Mobile Application Development."
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <PageNavbar setSidenavOpen={setSidenavOpen} />
      <div className="xl:container xl:mx-auto">
        {router.pathname.startsWith("/leetcodes") ? (
          <div className="flex md:flex-row flex-col gap-10">
            <LeetcodeSidebar
              sidenavOpen={sidenavOpen}
              setSidenavOpen={setSidenavOpen}
            />
            <main>{children}</main>
          </div>
        ) : (
          <>
            <main>{children}</main>
            <PageFooter />
          </>
        )}
      </div>
    </>
  );
}

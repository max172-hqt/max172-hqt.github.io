import Head from "next/head";
import React, { useState, createContext, useEffect } from "react";
import PageFooter from "./PageFooter";
import PageNavbar from "./PageNavbar";
import { useRouter } from "next/router";
import LeetcodeSidebar from "./LeetcodeSidebar";
import type { Post } from "../types";

export type PostContextType = {
  sidenavOpen: boolean;
  setSidenavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentPost: Post | null;
  setCurrentPost: React.Dispatch<React.SetStateAction<Post | null>>;
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
};
export const PostContext = createContext<PostContextType | null>(null);

export default function Layout({ children }: { children: React.ReactElement }) {
  const router = useRouter();
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    if (sidenavOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [sidenavOpen])

  return (
    <PostContext.Provider
      value={{
        sidenavOpen,
        setSidenavOpen,
        currentPost,
        setCurrentPost,
        posts,
        setPosts,
      }}
    >
      <Head>
        <title>Max Tran</title>
        <meta
          name="description"
          content="Max is a Frontend Engineer with skills in React, NodeJS, Web Design and Software Testing. Currently, Max a student at Fanshawe College taking the Post-graduate program in Mobile Application Development."
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <PageNavbar />
      <div className="xl:container xl:mx-auto sm:px-4 p-2">
        {router.pathname.startsWith("/leetcodes") ? (
          <div className="flex md:flex-row flex-col lg:gap-4">
            <LeetcodeSidebar />
            <main>{children}</main>
          </div>
        ) : (
          <>
            <main>{children}</main>
            {/* <PageFooter /> */}
          </>
        )}
      </div>
      {sidenavOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
          id="headlessui-dialog-overlay-:r3:"
          aria-hidden="true"
          data-headlessui-state="open"
        ></div>
      )}
    </PostContext.Provider>
  );
}

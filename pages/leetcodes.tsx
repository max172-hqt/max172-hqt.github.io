import Head from "next/head";
import Link from "next/link";
import { getSortedData } from "../lib/posts";
import { useContext, useEffect } from "react";
import { PostContext } from "../components/layout";
import type { PostContextType } from "../components/layout";
import type { Post } from "../types";

export async function getStaticProps() {
  const posts = getSortedData();

  return {
    props: {
      posts,
    },
  };
}

export default function Leetcodes({ posts }: { posts: Post[] }) {
  const { setPosts } = useContext(PostContext) as PostContextType;

  useEffect(() => {
    setPosts(posts);
  }, [posts, setPosts]);

  return (
    <>
      <Head>
        <title>Huy Tran - Leetcode</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>

      <section className="flex flex-col my-10 sm:mx-0 mx-5 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
          Welcome to my notes
        </h1>
        <div className="flex flex-col gap-4 leading-8">
          <p>
            Besides software development, I also love to study and solve Data
            Structure and Algorithms problems to be better at problem solving,
            and to be a more well-rounded software engineer. Here is a selected
            list of problems that I have solved, along with my thought process
            and solutions. The list of problems I posted here is heavily
            influenced by{" "}
            <a
              href="https://neetcode.io/practice"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-600 transition ease-in-out duration-300 text-amber-500"
            >
              neetcode.com
            </a>
            . Check him out!
          </p>
          <p>
            The articles are mainly for me to reference to later, so they are
            far from being as comprehensive as the official solutions on
            Leetcode. However, I will try my best to be as clear as possible!
          </p>
          <div>
            <Link
              href="/leetcodes/two-sum"
              className="bg-amber-600 hover:bg-amber-700 transition ease-in-out duration-300 rounded  py-2 px-4 font-bold text-white"
            >
              Solve Two-Sum
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

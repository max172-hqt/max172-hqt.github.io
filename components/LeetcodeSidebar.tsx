import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import type { Post } from "../types";
import { PostContext } from "./layout";
import type { PostContextType } from "./layout";
import { useOnClickOutside } from "usehooks-ts";

export default function LeetcodeSidebar() {
  const router = useRouter();
  const ref = useRef(null);

  const { sidenavOpen, setSidenavOpen, setCurrentPost, posts } = useContext(
    PostContext
  ) as PostContextType;

  const handleClickOutside = () => {
    if (sidenavOpen) setSidenavOpen(false);
  };

  useEffect(() => {
    const post = posts.find((post) => post.solution === router.asPath);
    setCurrentPost(post != undefined ? post : null);
  }, [posts, router.asPath, setCurrentPost]);

  useEffect(() => setSidenavOpen(false), [router.asPath, setSidenavOpen]);
  useOnClickOutside(ref, handleClickOutside);

  return (
      <div
        className={classNames({
          "flex flex-col justify-between overflow-y-scroll rounded-lg": true, // layout
          "bg-white dark:bg-[#121212] z-50": true, // colors
          "lg:sticky lg:top-[72px] top-0 left-0 fixed": true, // positioning
          "lg:h-[calc(100vh_-_84px)] h-full w-full lg:w-[360px] flex-shrink-0": true, // for height and width
          "transition-transform .3s ease-in-out lg:translate-x-0": true, //animations
          "-translate-x-full ": !sidenavOpen, //hide sidebar to the left when closed
        })}
        ref={ref}
      >
        <nav className="lg:sticky top-0 p-4">
          {/* nav items */}
          <ul className="space-y-2">
            <li className="text-slate-700 dark:text-slate-200 flex p-2 font-semibold">
              <div className="flex-grow">Leetcode Problems</div>
              <button
                type="button"
                className="text-gray-500 dark:text-slate-300 hover:text-amber-700 focus:text-amber-700 focus:outline-none md:hidden"
                onClick={() => setSidenavOpen(false)}
              >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                </svg>
              </button>
            </li>
            {posts.map((post) => (
              <li key={post.title}>
                <Link
                  href={post.solution}
                  className={classNames("flex p-2 rounded-lg ", {
                    "text-amber-600 font-medium":
                      router.asPath === post.solution,
                    "text-slate-700 dark:text-slate-300":
                      router.asPath !== post.solution,
                  })}
                >
                  <span className="ml-3 truncate dark:hover:text-slate-200 hover:text-slate-900">
                    {post.problemId}. {post.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
  );
}

import { useRouter } from "next/router";
import { useContext } from "react";
import { PostContext } from "./layout";
import type { PostContextType } from "./layout";

export default function SecondaryNavbar() {
  const router = useRouter();
  const { currentPost, setSidenavOpen } = useContext(
    PostContext
  ) as PostContextType;

  return (
    <div className="p-2 flex gap-2 relative top-0 border-b-slate-900/10 border-b dark:border-slate-50/[0.06]">
      <button
        type="button"
        className="block text-gray-500 dark:text-slate-200 hover:text-amber-700 focus:text-amber-700 focus:outline-none"
        onClick={() => setSidenavOpen(true)}
      >
        <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
      </button>
      {currentPost && currentPost.solution === router.asPath && (
        <>
          <div
            className="flex items-center text-gray-500 dark:text-slate-200"
            onClick={() => setSidenavOpen(true)}
          >
            <div>Leetcode</div>
            <svg
              width="3"
              height="6"
              aria-hidden="true"
              className="mx-3 overflow-visible text-gray-500"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
          <div className="font-semibold truncate overflow-hidden">{currentPost.title}</div>
        </>
      )}
    </div>
  );
}

import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LeetcodeSidebar() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/leetcode");
      const data = await res.json();

      setPosts(data.data);
    })();
  }, []);

  return (
    <div
      className={classNames({
        "flex flex-col justify-between overflow-y-auto": true, // layout
        "bg-gray-50 text-zinc-50": true, // colors
        "md:w-full md:sticky md:top-16 md:z-0 top-0 z-20 fixed": true, // positioning
        "md:h-[calc(100vh_-_64px)] h-full w-[300px]": true, // for height and width
        "transition-transform .3s ease-in-out md:translate-x-0": true, //animations
        // "-translate-x-full ": !open, //hide sidebar to the left when closed
      })}
    >
      <nav className="md:sticky top-0 px-3 py-4">
        {/* nav items */}
        <ul className="space-y-2">
          {posts.map((post) => (
            <li key={post.title}>
              <Link
                href={post.solution}
                className={classNames(
                  "flex p-2 rounded-lg hover:bg-gray-100",
                  {
                    "text-amber-600 font-medium": router.asPath === post.solution,
                    "text-gray-600 ": router.asPath !== post.solution
                  }
                )}
              >
                <span className="ml-3 truncate">{post.problemId}. {post.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

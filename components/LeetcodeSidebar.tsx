import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function LeetcodeSidebar() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);

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
        "flex flex-col justify-between overflow-y-scroll": true, // layout
        "text-zinc-50": true, // colors
        "lg:w-full lg:sticky lg:top-16 lg:z-0 top-0 z-20 fixed": true, // positioning
        "lg:h-[calc(100vh_-_64px)] h-full w-[360px]": true, // for height and width
        "transition-transform .3s ease-in-out lg:translate-x-0": true, //animations
        "-translate-x-full ": true, //hide sidebar to the left when closed
      })}
    >
      <nav className="lg:sticky top-0 px-3 py-4">
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

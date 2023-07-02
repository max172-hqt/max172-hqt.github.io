import classNames from "classnames";
import React, { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0 text-white text-xl font-medium">
        <div>Max Tran</div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open ? (
                <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={classNames("items-center", "justify-between", "sm:flex", "sm:p-0", {
          block: open,
          hidden: !open,
        })}
      >
        {[
          ["Home", "/"],
          ["LeetCode", "/leetcodes"],
          [
            "My Resume",
            "/Huy_Tran___Resume.pdf",
            "_blank",
            "noopenner noreferrer",
          ],
        ].map(([title, url, target, rel]) => (
          <a
            key={title}
            href={url}
            className="block px-2 py-1 mx-2 text-white font-semibold rounded hover:bg-gray-800"
            target={target != null ? target : undefined}
            rel={rel != null ? rel : undefined}
          >
            {title}
          </a>
        ))}
      </nav>
    </header>
  );
}

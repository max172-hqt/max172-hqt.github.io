import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function NavBar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const Icon = ({ name }: { name: string }) => {
    if (name === "github") {
      return <GitHubIcon fontSize="inherit" />;
    }
    if (name === "linkedin") {
      return <LinkedInIcon fontSize="inherit" />;
    }
    return <EmailIcon fontSize="inherit" />;
  };

  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <div className="flex items-center justify-between px-4 py-3 sm:p-0 font-medium">
        <div className="flex space-x-4 items-center justify-center">
          {[
            ["github", "https://github.com/max172-hqt"],
            ["linkedin", "https://www.linkedin.com/in/huytran172/"],
            ["mailto", "mailto:huytran172@gmail.com"],
          ].map(([title, url]) => (
            <a
              key={title}
              href={url}
              target="_blank"
              className="hover:text-sky-600 transition ease-in-out duration-300 text-2xl"
              rel="noreferrer"
            >
              <Icon name={title} />
            </a>
          ))}
        </div>
        <div className="sm:hidden">
          <button
            type="button"
            className="block text-gray-500 hover:text-sky-400 focus:text-sky-400 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {open ? (
                <path
                  fillRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      <nav
        className={classNames(
          "text-lg",
          "items-center",
          "justify-between",
          "sm:flex",
          "sm:p-0",
          "sm:text-md",
          {
            block: open,
            hidden: !open,
          }
        )}
      >
        {[
          ["about", "/"],
          ["leetcode", "/leetcodes"],
          [
            "resume",
            "/Huy_Tran___Resume.pdf",
            "_blank",
            "noopenner noreferrer",
          ],
        ].map(([title, url, target, rel]) => (
          <a
            key={title}
            href={url}
            className={classNames(
              "block px-2 py-1 mx-2 text-slate-700 rounded hover:text-sky-600 transition ease-in-out duration-300",
              {
                "text-sky-500": router.pathname === url,
              }
            )}
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

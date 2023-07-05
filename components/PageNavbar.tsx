import classNames from "classnames";
import { useRouter } from "next/router";
import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import SecondaryNavbar from "./SecondaryNavbar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThemeButton from "./ThemeButton";

const navItems: Array<[string, string, boolean]> = [
  ["about", "/", false],
  ["resume", "/resume", false],
  ["leetcode", "/leetcodes", false],
];

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
    <header className="sticky top-0 z-10 bg-white dark:bg-slate-900">
      <div className="xl:container xl:mx-auto sm:flex md:items-center md:px-4 md:py-3">
        <div className="flex items-center justify-between px-4 py-3 md:p-0 font-medium flex-grow">
          {router.pathname === "/" ? (
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
                  className="hover:text-amber-600 transition ease-in-out duration-300 text-2xl"
                  rel="noreferrer"
                >
                  <Icon name={title} />
                </a>
              ))}
            </div>
          ) : (
            <Link
              href="/"
              className="hover:text-amber-600 transition ease-in-out duration-300 text-2xl"
            >
              HT
            </Link>
          )}
          <div className="sm:hidden">
            <button
              type="button"
              className="block text-gray-500 hover:text-amber-700 focus:text-amber-700 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <MoreVertIcon />
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
          {navItems.map(([title, url, external]) => (
            <a
              key={title}
              href={url}
              className={classNames(
                "block px-2 py-1 mx-2 rounded hover:text-amber-600 transition ease-in-out duration-300 text-end",
                router.pathname === url ||
                  (url === "/leetcodes" &&
                    router.pathname === "/leetcodes/[id]")
                  ? "font-semibold text-amber-600"
                  : "text-slate-700 dark:text-slate-200"
              )}
              target={external ? "_blank" : undefined}
              rel={external ? "noopenner noreferrer" : undefined}
            >
              {title}
            </a>
          ))}
          <div className="flex justify-end px-2 py-1 mx-2">
            <ThemeButton />
          </div>
        </nav>
      </div>
      <div className="lg:hidden">
        {router.asPath.startsWith("/leetcodes") && <SecondaryNavbar />}
      </div>
    </header>
  );
}

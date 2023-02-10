import Link from "next/link";
import styles from "./Navbar.module.css";
import Menu from "@mui/icons-material/Menu";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Slide, useScrollTrigger } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
  scrolledToTop: boolean
}

function HideOnScroll(props: Props) {
  const { children, window, scrolledToTop } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: false,
    threshold: 100,
    target: window ? window() : undefined,
  });

  const childrenClone = React.cloneElement(children, {
    style: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(6px)',
      boxShadow: !scrolledToTop ? '0 2px 4px 0 rgba(0,0,0,.2)' : 'none'
    }
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {childrenClone}
    </Slide>
  );
}

export default function Navbar(props: Props) {
  const router = useRouter();
  const [isNavExpanded, setNavExpanded] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    setNavExpanded(false);
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
        <HideOnScroll {...props} scrolledToTop={scrolledToTop}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <Link href="/">HT</Link>
            </div>
            <button
              className={styles.menuButton}
              onClick={() => setNavExpanded(!isNavExpanded)}
            >
              <Menu />
            </button>
            <ul
              className={`${styles.menu} ${
                isNavExpanded ? styles.expanded : ""
              }`}
            >
              <li className={router.pathname == "/" ? styles.active : ""}>
                <Link href="/">Home</Link>
              </li>
              <li
                className={router.pathname == "/leetcodes" ? styles.active : ""}
              >
                <Link href="/leetcodes">LeetCode</Link>
              </li>
              <li>
                <a
                  href="/Huy_Tran___Resume.pdf"
                  className={styles.button}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
        </HideOnScroll>
    </header>
  );
}

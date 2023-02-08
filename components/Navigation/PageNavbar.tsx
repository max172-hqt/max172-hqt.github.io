import Link from "next/link";
import styles from "./Navbar.module.css";
import Menu from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const [isNavExpanded, setNavExpanded] = useState(false);

  useEffect(() => {
    setNavExpanded(false);
  }, [router.pathname]);

  return (
    <header>
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
          className={`${styles.menu} ${isNavExpanded ? styles.expanded : ""}`}
        >
          <li className={router.pathname == "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname == "/leetcodes" ? styles.active : ""}>
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
    </header>
  );
}

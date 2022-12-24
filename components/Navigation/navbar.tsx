import Link from "next/link";
import styles from "./Navbar.module.css";
import Menu from "@mui/icons-material/Menu";
import { useState } from "react";

export default function Navbar() {
  const [isNavExpanded, setNavExpanded] = useState(false);

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
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="contact.html">Work</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/">HT</Link>
        </div>
        <ul className={styles.menu}>
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

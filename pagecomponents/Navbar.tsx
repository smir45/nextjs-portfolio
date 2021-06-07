import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { FaBeer } from 'react-icons/fa';

const NavBar = () => {
  return (
    <main className={styles.bucket}>
        
      <nav className={styles.nav}>
        <ul>
          <li className={styles.list}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/skills">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default NavBar;

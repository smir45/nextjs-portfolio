import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { FaBeer } from 'react-icons/fa';

const NavBar = () => {

  return (
    <main className={styles.bucket}>
        
      <nav className={styles.nav}>
         <div className={styles.img}></div>
        <ul className={styles.ul}>
          <li className={styles.list}>
            <Link href="/">
              <a className={styles.links1}>Home</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/about">
              <a className={styles.links2}>About</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/skills">
              <a className={styles.links3}>Skills</a>
            </Link>
          </li>
          <li className={styles.list}>
            <Link href="/contact">
              <a className={styles.links4}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
};

export default NavBar;

import React from "react";
import Link from "next/link";
import styles from "../styles/navbar.module.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
          <div className={styles.social}>
            <li>
              <a className={styles.links5} href="https://github.com/smir45"><FaGithub /></a>
              
            </li>
            <li>
              <a className={styles.links5} href="https://www.linkedin.com/in/smir45/"><FaLinkedin /></a>
              
            </li>
          </div>
        </ul>
      </nav>
    </main>
  );
};

export default NavBar;

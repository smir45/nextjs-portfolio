import styles from "../styles/bodysec.module.scss";
import Link from "next/link";
// main section
const BannerSection = () => {
  return (
    <main className={styles.elementContainer}>
      <div className={styles.textSection}>
        <div className={styles.textinner}>
          <h1 className={styles.titletext}>
            Hi,
            <br />
            I'm'
            <br />
            Samir Mishra
          </h1>
          <p className={styles.paragraphTitle}>
            Full Stack Webdeveloper / Freelancer and a Student
          </p>
          <Link href="/contact">
            <a className={styles.contactbtn}>Contact</a>
          </Link>
        </div>
      </div>
      <div className={styles.svgSection}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className={styles.svgbox}></div>
      </div>
    </main>
  );
};

export default BannerSection;

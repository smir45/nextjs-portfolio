import NavBar from "./Navbar";
import Head from "next/head";
import styles from '../styles/Home.module.scss'
import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <main className={styles.flexbox} >
        
      <header>
        <Head>
          <title>Home | Samir Mishra</title>
        </Head>
      </header>
      

      <section>
        <NavBar />
      </section>
      
      <div className={styles.container}>
      {
            loading ?
                <HashLoader
                size={150}
                color={"#123abc"}
                loading={loading}
                />

            :
            <div className={styles.elements}></div>
            }
      </div>
    </main>
  );
};

export default Home;

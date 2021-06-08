import NavBar from "./Navbar";
import Head from "next/head";
import styles from '../styles/Home.module.scss'
import Body from '../pagecomponents/body-index'


const Home = () => {
  
  return (
    <main className={styles.flexbox} >
        
      <header>
        <Head>
          <title>Home | Samir Mishra</title>
        </Head>
      </header>
      {/* Section One */}

      <section>
        <NavBar />
      </section>
      {/* Section Two */}
      <section>
        <Body />
      </section>
      
    </main>
  );
};

export default Home;

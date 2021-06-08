import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import styles from '../styles/navbar.module.scss';

const Body = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1000);
  }, []);

  return (
    <main className={styles.loader}>
      {loading ? (
        <RiseLoader
          css={`
             display: flex;
             justify-content: center;
             align-items: center;
             width: 92vw;
             height: 100vh;
            
          `}
          size={15}
          color={"#000000"}
          loading={loading}
        />
      ) : (
        <div>
            <h1>body</h1>
        </div>
      )}
    </main>
  );
};

export default Body;

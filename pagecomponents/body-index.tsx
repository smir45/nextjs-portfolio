import { useState, useEffect } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";
import styles from '../styles/navbar.module.scss';

const Body = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

  return (
    <main className={styles.loader}>
      {loading ? (
        <PropagateLoader
          css={`
             display: flex;
             justify-content: center;
             align-items: center;
             margin-left: auto;
             margin-right: auto;
             border: 2px solid red;
             width: fit-content;
             height: 100vh;
            
          `}
          size={150}
          color={"#000000"}
          loading={loading}
        />
      ) : (
        <div></div>
      )}
    </main>
  );
};

export default Body;

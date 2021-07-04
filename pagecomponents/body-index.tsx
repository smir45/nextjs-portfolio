import { useState, useEffect } from "react";
import RiseLoader from "react-spinners/RiseLoader";
import styles from '../styles/bodysec.module.scss';
import BannerSection from './bannersec';

const Body = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },);
  }, []);

  return (
    <main>
      {/* loading section */}
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
        <div className={styles.elements}>
            <h1><BannerSection /></h1>
        </div>
      )}
    </main>
  );
};

export default Body;

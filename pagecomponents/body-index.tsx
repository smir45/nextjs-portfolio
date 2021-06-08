import { useState, useEffect } from "react";
import HashLoader from "react-spinners/HashLoader";

const Body = () => {

    const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);

    return(
        <main>
            {
            loading ?
                <HashLoader
                css={`display: block;
                margin: 0 auto;
                border-color: red;`}
                size={150}
                color={"#000000"}
                loading={loading}
                />

            :
            <div>

            </div>
            }
        </main>
    )
}

export default Body
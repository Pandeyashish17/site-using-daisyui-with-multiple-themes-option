import { StateContext } from "../context/StateContext";
import Layout from "../HOC/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <StateContext>
        <Layout>
          <Component {...pageProps} />{" "}
        </Layout>
      </StateContext>
      ;
    </>
  );
}

export default MyApp;

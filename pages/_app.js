import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Warning.css";
import "../styles/Donate.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

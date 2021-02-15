import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import "../styles/Navbar.css";
import "../styles/Warning.css";
import "../styles/Donate.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState("TR");
  return (
    <Layout lang={lang} setLang={setLang}>
      <Component lang={lang} {...pageProps} />
    </Layout>
  );
}

export default MyApp;

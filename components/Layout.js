import Head from "next/head";
import Header from "./header";
import styles from "../styles/Layout.module.css";
import Footer from "./Footer";
export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}></div>
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "DJ Events | Find the hottest parties",
  description: "find the latest DJ and other musical events",
  keywords: "music, dj, edm, events",
};

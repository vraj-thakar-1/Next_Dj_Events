import Link from "next/link";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About Dj Events">
      <div style={{ textAlign: "center" }}>
        <h1>About</h1>
        <p> This is an app to find the latest DJ and other musical event</p>
        <p>version 1.0.0</p>
        <Link href="/">Home</Link>
      </div>
    </Layout>
  );
};

export default AboutPage;

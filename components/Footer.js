import React from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p> Copyright &copy; "We"raj 2023 </p>
      <p>
        {" "}
        <Link href="/About">About This Project</Link>{" "}
      </p>
    </footer>
  );
}

import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
import style from "../styles/404.module.css";
export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div className={style.error}>
        <h1>
          {" "}
          <FaExclamationTriangle />
          404
        </h1>
        <h4> Sorry, there is nothing here</h4>
        <Link href="/">Go back Home</Link>
      </div>
    </Layout>
  );
}

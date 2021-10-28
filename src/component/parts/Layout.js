import React from "react";
import styles from "../../../styles/Layout.module.css";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <div className="relative" style={{ paddingBottom: 60 }}>
      <div className="flex justify-center">
        <img src="/assets/flower-1.png" width={285} alt="flower" />
      </div>
      <div className={`${styles.container} flex flex-col items-center`}>
        <p className={`${styles.title} uppercase`}>{title}</p>
        <section className="container mx-auto">{children}</section>
      </div>
      {/* <div className="flex justify-center absolute inset-0">
        <img src="/assets/flower-2.png" alt="flower" />
      </div> */}
      <Footer />
    </div>
  );
}

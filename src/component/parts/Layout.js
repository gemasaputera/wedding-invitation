import React from "react";
import Fade from "react-reveal/Fade";
import styles from "../../../styles/Layout.module.css";
import Footer from "./Footer";

export default function Layout({ children, title }) {
  return (
    <>
      <div className="relative pb-16">
        <div className="flex justify-center">
          <img src="/assets/flower-1.png" width={285} alt="flower" />
        </div>
        <div className={`${styles.container} flex flex-col items-center`}>
          <Fade top delay={300}>
            <p
              className={`${styles.title} uppercase xl:mt-10 xl:text-3xl!important`}
            >
              {title}
            </p>
          </Fade>
          <section className="container mx-auto">{children}</section>
        </div>
        <Footer />
      </div>
    </>
  );
}

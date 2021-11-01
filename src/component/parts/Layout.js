import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/Layout.module.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  const audioRef = useRef(
    typeof Audio !== "undefined" &&
      new Audio(`https://gemasaputera.com/musics/background-music-raisa.mp3`)
  );

  // const isReady = useRef(false);
  // const [playMusic, setPlayMusic] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
    // if (audioRef.current) {
    //   return false;
    // } else {
    //   audioElement.play();
    // }
  }, [audioRef]);

  return (
    <>
      <div className="relative pb-16">
        <div className="absolute"></div>
        <div className="flex justify-center">
          <img src="/assets/flower-1.png" width={285} alt="flower" />
        </div>
        <div className={`${styles.container} flex flex-col items-center`}>
          <section className="container mx-auto">{children}</section>
        </div>
        <Footer />
      </div>
    </>
  );
}

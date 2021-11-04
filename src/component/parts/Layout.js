import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/Layout.module.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  const audioRef = useRef(
    typeof Audio !== "undefined" &&
      new Audio(`https://gemasaputera.com/musics/background-music-raisa.mp3`)
  );

  const [playMusic, setPlayMusic] = useState(true);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayMusic(true);
    }
    return () => {
      audioRef.current.pause();
      setPlayMusic(false);
    };
  }, [audioRef]);

  useEffect(() => {
    if (playMusic) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playMusic]);

  const handleAudio = () => {
    setPlayMusic(!playMusic);
  };

  const ControlAudio = () => {
    return (
      <div
        onClick={handleAudio}
        className="fixed flex justify-center items-center left-2 top-4 md:top-20 md:left-16 bg-white drop-shadow-lg rounded-full w-10 h-10 z-40 cursor-pointer hover:bg-gray-200"
      >
        <img
          src={`/icons/${playMusic ? "ic_music.svg" : "ic_music_off.svg"}`}
          alt="Music Control"
        />
      </div>
    );
  };

  return (
    <>
      <div className="relative pb-16">
        <ControlAudio />
        <div className="flex justify-center md:mt-12">
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

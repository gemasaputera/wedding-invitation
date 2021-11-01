import Head from "next/head";
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

export default function Home() {
  const Router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    Router.push("/home");
  };
  const [name, setName] = useState("");
  useEffect(() => {
    if (Router?.query?.to) {
      setName(Router.query.to);
    }
  }, [Router]);

  const OpeningScreen = () => {
    return (
      <div className="fixed inset-0">
        <div className="relative flex flex-col h-screen p-8 z-50 overflow-hidden">
          <div className="absolute bg-black bg-opacity-40 inset-0 z-10" />
          <div className="background-cover" />
          <div className="flex flex-col items-center justify-center z-20">
            <Fade bottom>
              <p className="font-serif text-2xl 2xl:text-5xl mt-8 mb-8 text-white">
                Wedding Announcement
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center">
                <p className="font-serif text-3xl 2xl:text-5xl text-white md:mr-5">
                  Iga
                </p>
                <p
                  className="text-2xl 2xl:text-5xl text-white md:mr-5"
                  style={{ fontFamily: "LasminiYahut" }}
                >
                  &
                </p>
                <p className="font-serif text-3xl 2xl:text-5xl text-white">
                  Gema
                </p>
              </div>
            </Fade>
          </div>
          <div className="flex justify-center z-20 mt-20">
            <p className="text-white">Kepada Bapak/Ibu/Saudara/i</p>
          </div>
          <div className="flex justify-center z-20">
            <p className="text-white font-bold text-xl 2xl:text-2xl my-5">
              {name === "" ? "Tamu Undangan" : name}
            </p>
          </div>
          <div className="flex justify-center z-20">
            <p className="text-white">
              Kami Mengundang Anda Untuk hadir Di Acara Pernikahan Kami.
            </p>
          </div>
          <div className="flex justify-center mt-20 z-20">
            <Fade top delay={300}>
              <button
                className="btn btn-primary uppercase 2xl:text-2xl font-bold md:pl-10 md:pr-10"
                onClick={handleOpen}
              >
                buka undangan
              </button>
            </Fade>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">{!open && <OpeningScreen />}</main>
    </>
  );
}

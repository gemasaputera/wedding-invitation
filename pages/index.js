import Head from "next/head";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

export default function Home() {
  const Router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
    Router.push("/home");
  };
  const OpeningScreen = () => {
    return (
      <section className="relative flex flex-col justify-between h-screen p-8 z-50 overflow-hidden">
        <div className="absolute bg-black bg-opacity-40 inset-0 z-10" />
        <div className="background-cover" />
        <div className="flex flex-col items-center justify-center z-20">
          <Fade bottom>
            <p className="font-serif text-2xl mt-8 mb-8 text-white">
              Wedding Announcement
            </p>
            <p className="font-serif text-3xl text-white">Iga</p>
            <p className="font-serif text-2xl text-white">&</p>
            <p className="font-serif text-3xl text-white">Gema</p>
          </Fade>
        </div>
        <div className="flex justify-center container z-20">
          <Fade top delay={300}>
            <button
              className="btn btn-primary uppercase mb-8"
              onClick={handleOpen}
            >
              buka undangan
            </button>
          </Fade>
        </div>
      </section>
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

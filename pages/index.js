import Head from "next/head";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";
import Layout from "../src/component/parts/Layout";
import PersonCard from "../src/component/parts/PersonCard";
import WeddingAnnouncement from "../src/component/parts/WeddingAnnouncement";
import Couples from "../src/json/Couples.json";
const Event = dynamic(() => import("../src/component/fragment/Event"));
const Wishes = dynamic(() => import("../src/component/fragment/Wishes"));
const Quotes = dynamic(() => import("../src/component/fragment/Quotes"));
const Gallery = dynamic(() => import("../src/component/fragment/Gallery"));

export default function Home() {
  const Router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const [name, setName] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <p className="font-serif text-2xl 2xl:text-5xl my-4 md:my-8 text-white">
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
          <div className="flex justify-center z-20 mt-10 md:mt-20">
            <p className="text-sm md:text-lg text-white">
              Kepada Bapak/Ibu/Saudara/i
            </p>
          </div>
          <div className="flex justify-center z-20">
            <p className="text-white text-center font-bold text-xl 2xl:text-2xl my-5">
              {name === "" ? "Tamu Undangan" : name}
            </p>
          </div>
          <div className="flex justify-center z-20">
            <p className="text-sm md:text-lg text-center text-white">
              Kami Mengundang Anda Untuk hadir Di Acara Pernikahan Kami.
            </p>
          </div>
          <div className="flex justify-center mt-10 md:mt-20 sm:mt-10 z-20">
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

  const Home = () => {
    return (
      <div className="relative" id="home">
        <div className="absolute right-0 hidden md:block">
          <img src="/assets/flower-6.png" alt="" />
        </div>
        <Fade top delay={300}>
          <div className="flex flex-col items-center justify-center">
            <p className="font-serif text-4xl mt-2">
              Iga <span style={{ fontFamily: "LasminiYahut" }}>&</span> Gema
            </p>
            <p className="font-bold text-center mt-4 text-sm">
              Assalamu’alaikum Warahmatullahi Wabarakaatuh
            </p>
            <p className="font-light text-center mt-2 text-sm">
              Dengan memohon rahmat dan ridho Allah SWT kami bermaksud
              menyelenggarakan pernikahan putra putri kami:
            </p>
          </div>
        </Fade>
        <section className="mt-12 md:flex md:flex-row md:justify-evenly">
          {Couples.map((person, i) => {
            return (
              <Fade left delay={1000 * i} key={`person-${i}`}>
                <PersonCard data={person} reverse={person.gender === "P"} />
              </Fade>
            );
          })}
        </section>
      </div>
    );
  };

  const EventPart = () => {
    return (
      <div className="relative" id="event">
        <div className="absolute left-0 hidden md:block">
          <img src="/assets/flower-8.png" alt="" />
        </div>
        <Fade top delay={300}>
          <p className="font-bold uppercase text-base text-center mt-20 md:text-3xl">
            Detail Acara
          </p>
        </Fade>
        <Event />
      </div>
    );
  };

  const GalleryPart = () => {
    return (
      <div className="relative" id="gallery">
        <div className="absolute right-0 top-0 hidden md:block">
          <img src="/assets/flower-7.png" alt="" />
        </div>
        <Fade top delay={300}>
          <p className="font-bold uppercase text-base text-center mt-20 md:text-3xl">
            Gallery
          </p>
        </Fade>
        <Gallery />
      </div>
    );
  };

  const WishesPart = () => {
    return (
      <div id="wishes">
        <Fade top delay={300}>
          <p className="font-bold uppercase text-base text-center mt-20 md:text-3xl">
            Wishes
          </p>
        </Fade>
        <Wishes />
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative main">
        {!open && <OpeningScreen />}
        {open && (
          <Layout>
            <Home />
            <EventPart />
            <Quotes />
            <GalleryPart />
            <WishesPart />
            <WeddingAnnouncement />
          </Layout>
        )}
      </main>
    </>
  );
}

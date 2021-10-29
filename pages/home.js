import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Fade from "react-reveal/Fade";
import Layout from "../src/component/parts/Layout";
import Couples from "../src/json/Couples.json";
import PersonCard from "../src/component/parts/PersonCard";
import WeddingAnnouncement from "../src/component/parts/WeddingAnnouncement";
import { Router } from "next/router";

export default function HomeScreen() {
  const Router = useRouter();
  return (
    <Layout title="the wedding of">
      <Head>
        <title>Iga & Gema Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            <Fade left delay={1000 * i}>
              <PersonCard
                data={person}
                key={`person-${i}`}
                reverse={person.gender === "P"}
              />
            </Fade>
          );
        })}
      </section>
      <div className="flex justify-center my-10">
        <Fade bottom delay={500}>
          <button
            className="btn btn-primary"
            onClick={() => Router.push("/event")}
          >
            Detail Acara
          </button>
        </Fade>
      </div>
      <Fade bottom delay={500}>
        <WeddingAnnouncement />
      </Fade>
    </Layout>
  );
}

import React from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Layout from "../src/component/parts/Layout";
import Couples from "../src/json/Couples.json";
import PersonCard from "../src/component/parts/PersonCard";
import WeddingAnnouncement from "../src/component/parts/WeddingAnnouncement";

export default function HomeScreen() {
  return (
    <Layout title="the wedding of">
      <Head>
        <title>Iga & Gema Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fade top delay={300}>
        <div className="flex flex-col items-center justify-center">
          <p className="font-serif text-4xl mt-2">
            Iga <span>&</span> Gema
          </p>
          <p className="font-medium text-center mt-4 text-sm">
            Assalamu’alaikum Warahmatullahi Wabarakaatuh
          </p>
          <p className="font-light text-center mt-2 text-sm">
            Dengan memohon rahmat dan ridho Allah SWT kami bermaksud
            menyelenggarakan pernikahan putra putri kami:
          </p>
        </div>
      </Fade>
      <section className="mt-12">
        {Couples.map((person, i) => {
          return (
            <Fade left delay={1000}>
              <PersonCard
                data={person}
                key={`person-${i}`}
                reverse={person.gender === "P"}
              />
            </Fade>
          );
        })}
      </section>
      <Fade bottom delay={500}>
        <WeddingAnnouncement />
      </Fade>
    </Layout>
  );
}

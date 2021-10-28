import React from "react";
import Head from "next/head";
import Layout from "../src/component/parts/Layout";
import Couples from "../src/json/Couples.json";
import PersonCard from "../src/component/parts/PersonCard";

export default function HomeScreen() {
  return (
    <Layout title="the wedding of">
      <Head>
        <title>Iga & Gema Wedding Invitation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
      <section className="mt-12">
        {Couples.map((person, i) => {
          return (
            <PersonCard
              data={person}
              key={`person-${i}`}
              reverse={person.gender === "P"}
            />
          );
        })}
      </section>
    </Layout>
  );
}

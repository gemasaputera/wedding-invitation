import React from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Layout from "../src/component/parts/Layout";
import GalleryList from "../src/component/parts/GalleryList";
import data from "../src/json/ImageGallery.json";
import WeddingAnnouncement from "../src/component/parts/WeddingAnnouncement";

export default function GalleryScreen() {
  return (
    <Layout title="gallery">
      <Head>
        <title>Gallery | Iga & Gema Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-10">
        <GalleryList data={data} />
      </div>
      <Fade bottom delay={200}>
        <WeddingAnnouncement />
      </Fade>
    </Layout>
  );
}

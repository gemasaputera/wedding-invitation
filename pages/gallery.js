import React from "react";
import Head from "next/head";
import Layout from "../src/component/parts/Layout";

export default function GalleryScreen() {
  return (
    <Layout title="gallery">
      <Head>
        <title>Gallery | Iga & Gema Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}

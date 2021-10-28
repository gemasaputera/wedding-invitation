import React from "react";
import Head from "next/head";
import Layout from "../src/component/parts/Layout";

export default function WishesScreen() {
  return (
    <Layout title="Wishes">
      <Head>
        <title>Wishes | Iga & Gema Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}

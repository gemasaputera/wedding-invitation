import React from "react";
import Head from "next/head";
import Layout from "../src/component/parts/Layout";

export default function EventScreen() {
  return (
    <Layout title="wedding detail">
      <Head>
        <title>Wedding | Iga & Gema Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  );
}

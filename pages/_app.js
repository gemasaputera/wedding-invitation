import "../styles/index.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="preload" src="/images/background.webp" />
        <link rel="preload" src="/images/profile-1.webp" />
        <link rel="preload" src="/images/profile-2.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

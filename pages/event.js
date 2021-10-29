import React, { useState } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Layout from "../src/component/parts/Layout";
import WeddingAnnouncement from "../src/component/parts/WeddingAnnouncement";

export default function EventScreen() {
  const [dataEvent] = useState([
    {
      icon: "ic_calendar_twotone.svg",
      text: "21 November 2021",
      subtext: "",
      type: "",
    },
    {
      icon: "ic_watch_twotone.svg",
      text: "08.00 - 10.00",
      subtext: "",
      type: "akad",
    },
    {
      icon: "ic_pin_twotone.svg",
      text: "Aula Masjid Al-Muiz Al-Azhar GDC Depok",
      subtext:
        "Jl. Boulevard Grand Depok City No. 123, Kalimulya, Kec. Cilodong, Kota Depok, Jawa Barat",
      type: "",
    },
  ]);
  const [dataResepsi] = useState([
    {
      icon: "ic_calendar_twotone.svg",
      text: "21 November 2021",
      subtext: "",
    },
    {
      icon: "ic_watch_twotone.svg",
      text: "11.00 - 13.00",
      subtext: "",
    },
    {
      icon: "ic_pin_twotone.svg",
      text: "Aula Masjid Al-Muiz Al-Azhar GDC Depok",
      subtext:
        "Jl. Boulevard Grand Depok City No. 123, Kalimulya, Kec. Cilodong, Kota Depok, Jawa Barat",
    },
  ]);

  return (
    <Layout title="wedding detail">
      <Head>
        <title>Wedding | Iga & Gema Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fade delay={300}>
        <section className="relative bg-white flex flex-col justify-center drop-shadow-md w-full p-4 rounded-lg mt-10">
          <div
            className="absolute top-0 left-0"
            style={{ marginLeft: "-16px", marginTop: "-16px" }}
          >
            <img src="/assets/flower-3.png" alt="" />
          </div>
          <div
            className="absolute top-0 right-0"
            style={{ marginRight: "-16px", marginTop: "-16px" }}
          >
            <img src="/assets/flower-4.png" alt="" />
          </div>
          <div className="absolute left-0" style={{ marginLeft: "-16px" }}>
            <img src="/assets/flower-5.png" alt="" />
          </div>
          <Fade bottom delay={500}>
            <div className="flex justify-center items-center mb-8">
              <span className="mr-1">
                <img src="/icons/ic_rings.svg" alt="rings" />
              </span>
              <p className="uppercase tracking-widest primary-color">
                akad nikah
              </p>
            </div>
          </Fade>

          {dataEvent.map((item, i) => {
            return (
              <Fade bottom delay={700 * i} key={`akad-data-${i}`}>
                <div
                  className={`grid grid-cols-3 justify-center ${
                    item.subtext !== "" ? "items-start" : "items-center"
                  } mb-4`}
                >
                  <span className="mr-4 flex justify-end">
                    <img src={`/icons/${item.icon}`} alt={item.icon} />
                  </span>
                  {item.subtext === "" && (
                    <p className="font-semibold col-span-2">{item.text}</p>
                  )}

                  {item.subtext !== "" && (
                    <div className="col-span-2 flex flex-col">
                      <p className="font-semibold">{item.text}</p>
                      <p className="font-light">{item.subtext}</p>
                    </div>
                  )}
                </div>
              </Fade>
            );
          })}

          <Fade bottom delay={500}>
            <div className="flex justify-center items-center mb-8 mt-4">
              <span className="mr-1">
                <img src="/icons/ic_cheer.svg" alt="cheer" />
              </span>
              <p className="uppercase tracking-widest primary-color">resepsi</p>
            </div>
          </Fade>

          {dataResepsi.map((item, i) => {
            return (
              <Fade bottom delay={700 * i} key={`akad-data-${i}`}>
                <div
                  className={`grid grid-cols-3 justify-center ${
                    item.subtext !== "" ? "items-start" : "items-center"
                  } mb-4`}
                >
                  <span className="mr-4 flex justify-end">
                    <img src={`/icons/${item.icon}`} alt={item.icon} />
                  </span>
                  {item.subtext === "" && (
                    <p className="font-semibold col-span-2">{item.text}</p>
                  )}

                  {item.subtext !== "" && (
                    <div className="col-span-2 flex flex-col">
                      <p className="font-semibold">{item.text}</p>
                      <p className="font-light">{item.subtext}</p>
                    </div>
                  )}
                </div>
              </Fade>
            );
          })}
          <Fade top delay={300}>
            <div className="mt-4 mb-8 flex justify-center">
              <a
                className="btn btn-primary text-center uppercase "
                href="https://goo.gl/maps/tQnZSpskg1ykRDzV9"
                target="_blank"
              >
                map lokasi
              </a>
            </div>
          </Fade>

          <Fade top delay={600}>
            <div className="flex justify-center md:w-3/5 mb-8 mx-auto">
              <p className="font-light text-center">
                Mengikuti anjuran protokol kesehatan COVID-19 Acara pernikahan
                hanya akan dihadiri oleh pihak keluarga kedua mempelai. Untuk
                itu, kami mohon doa restu supaya acara berjalan dengan lancar.
              </p>
            </div>
          </Fade>

          <Fade top delay={700}>
            <p className="font-semibold text-center">Protokol</p>

            <div className="flex flex-col lg:flex-row justify-center items-center mb-4">
              <div>
                <img src="/assets/protokol-1.png" alt="" />
              </div>
              <div>
                <img src="/assets/protokol-2.png" alt="" />
              </div>
            </div>
          </Fade>
        </section>
      </Fade>
      <WeddingAnnouncement />
    </Layout>
  );
}

import React, { useState, useEffect } from "react";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import Layout from "../src/component/parts/Layout";
import WeddingAnnouncement from "../src/component/parts/WeddingAnnouncement";

export default function WishesScreen() {
  const [form, setForm] = useState({
    name: null,
    message: null,
  });
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    const values = Object.values(form);
    values.map((item) => (item ? setDisabled(false) : setDisabled(true)));
  }, [form]);

  const handleChange = (e, name) => {
    const value = e.target.value;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    console.log(`form`, { ...form, date: new Date() });
  };

  const ItemWishes = () => {
    return (
      <div className="flex mb-2">
        <div>
          <img src="/icons/ic_love_twotone.svg" alt="ic_love_twotone" />
        </div>
        <div className="flex flex-col flex-1 ml-2">
          <p className="font-semibold" style={{ fontSize: 14 }}>
            Denni Sumargo
          </p>
          <p className="text-gray-400 mb-2" style={{ fontSize: 10 }}>
            11 Hours ago
          </p>
          <p style={{ fontSize: 12 }}>
            Happy wedding, Semoga menjadi keluarga yg bahagia, langgeng selalu
            ya :)
          </p>
        </div>
      </div>
    );
  };

  return (
    <Layout title="Wishes">
      <Head>
        <title>Wishes | Iga & Gema Wedding</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className="flex flex-col mt-10"
        style={{ marginLeft: 16, marginRight: 16 }}
      >
        <Fade delay={500}>
          <p className="text-center md:w-3/5 md:mx-auto">
            Doa serta dukungan dari Anda bagi pernikahan Iga & Gema sungguh
            sangat berharga.
          </p>
          <p className="text-center md:w-3/5 md:mx-auto">
            Kami senantiasa selalu mendoakan setiap keluarga, sahabat, dan
            seluruh rekan - rekan Iga & Gema agar tetap sehat di tengah situasi
            pandemi. Terima Kasih yang tak terhingga kami sampaikan dari lubuk
            hati terdalam atas kebaikan dan dukungan Anda dalam pernikahan kami.
          </p>
          <p className="text-center mt-4">Salam Hormat Kami</p>
          <p className="font-semibold text-center">
            Iga Utami A. & Gema Saputera
          </p>
        </Fade>
        <Fade bottom delay={700}>
          <div className="flex justify-center my-4">
            <button className="btn btn-primary uppercase">
              buka amplop digital
            </button>
          </div>
        </Fade>
        <Fade delay={500}>
          <div className="flex justify-center mt-10 mb-4">
            <p className="font-bold primary-color uppercase tracking-widest">
              wishes book
            </p>
          </div>
          <p className="text-center">
            Kirim harapan dan doa untuk kedua mempelai pasangan
          </p>
        </Fade>
        <div className="flex flex-col items-start my-4 md:w-3/5 md:mx-auto">
          <Fade bottom delay={1000}>
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="name" className="font-semibold capitalize">
                your name <span className="text-red-600">*</span>
              </label>
              <input
                name="name"
                type="text"
                className="bg-white rounded-lg p-4"
                placeholder="Enter your name..."
                onChange={(e) => handleChange(e, "name")}
              />
            </div>
          </Fade>
          <Fade bottom delay={1300}>
            <div className="flex flex-col w-full">
              <label htmlFor="name" className="font-semibold capitalize">
                your message <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                className="bg-white rounded-lg p-4"
                placeholder="Enter your message..."
                rows="4"
                onChange={(e) => handleChange(e, "message")}
              />
            </div>
            <button
              className={`btn btn-primary uppercase w-full my-4 ${
                disabled ? "disabled:opacity-50" : ""
              }`}
              disabled={disabled}
              onClick={handleSubmit}
            >
              kirim pesan
            </button>
          </Fade>
          <Fade delay={1500}>
            <div className="flex justify-center mt-8 mb-4 w-full">
              <p className="font-bold primary-color uppercase tracking-widest">
                harapan dan doa
              </p>
            </div>
          </Fade>
          <Fade delay={1800}>
            <section className="bg-white w-full h-60 p-4 overflow-y-auto overflow-x-hidden">
              <ItemWishes />
            </section>
          </Fade>
        </div>
      </section>
      <WeddingAnnouncement />
    </Layout>
  );
}

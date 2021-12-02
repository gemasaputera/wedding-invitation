import React, { useState, useEffect, useCallback } from "react";
import Fade from "react-reveal/Fade";
import Dialog from "../parts/Dialog";
import dataBank from "../../json/BankList.json";
import { db } from "../../config/Firebase";
import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import timeconverter from "../../utils/timecoverter";
import Spinner from "../parts/Spinner";

export default function Wishes() {
  const [form, setForm] = useState({
    name: "",
    text: "",
  });
  const [disabled, setDisabled] = useState(true);
  // const [address] =
  //   useState(`Komplek Departemen Agama, jalan walisongo 1 Blok A No. 48
  // RT01/RW015, Desa Pabuaran (gang smp muhammadiyah, rumah warung)
  // KAB. BOGOR - BOJONGGEDE JAWA BARAT ID 16921`);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    getWishes();
  }, [form]);

  useEffect(() => {
    const values = Object.values(form);
    values.map((item) =>
      item !== "" && item ? setDisabled(false) : setDisabled(true)
    );
  }, [form]);

  const getWishes = useCallback(async () => {
    const wishesRef = collection(db, "messages");
    const q = query(wishesRef, orderBy("date", "desc"));
    const data = await getDocs(q);
    setWishes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  });

  const handleDialog = () => {
    setOpen(!open);
  };

  const handleChange = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const send = async () =>
      await addDoc(collection(db, "messages"), {
        ...form,
        date: new Date(),
      });
    setLoading(true);
    send().then(() => {
      setLoading(false);
      setForm({
        name: "",
        text: "",
      });
    });
  };

  const ItemWishes = ({ data }) => {
    return (
      <div className="flex mb-2">
        <div>
          <img src="/icons/ic_love_twotone.svg" alt="ic_love_twotone" />
        </div>
        <div className="flex flex-col flex-1 ml-2">
          <p className="font-semibold" style={{ fontSize: 14 }}>
            {data.name}
          </p>
          <p className="text-gray-400 mb-2" style={{ fontSize: 10 }}>
            {timeconverter(data.date.seconds)}
          </p>
          <p style={{ fontSize: 12 }}>{data.text}</p>
        </div>
      </div>
    );
  };

  const renderDialog = () => {
    return (
      <Dialog open={open} onClose={() => setOpen(false)}>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 p-1">
          {/* <div className="bg-white flex flex-col rounded-lg drop-shadow-lg p-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Alamat:</p>
              <button
                type="button"
                className="rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer p-2 flex justify-center items-center"
                onClick={() => navigator.clipboard.writeText(address)}
              >
                <p className="capitalize text-xs">copy address</p>
              </button>
            </div>
            <div className="mt-8">
              <p className="text-sm text-gray-500">{address}</p>
            </div>
          </div> */}
          {dataBank.map((item, i) => {
            return (
              <div
                key={`bank-${i}`}
                className="bg-white flex flex-col items-center rounded-lg drop-shadow-lg p-2.5"
              >
                <div className="flex justify-between w-full">
                  <div style={{ width: 100 }}>
                    <img src={item.logo} alt="" />
                  </div>
                  <button
                    type="button"
                    className="rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer p-2 flex justify-center items-center"
                    onClick={() =>
                      navigator.clipboard.writeText(item.bank_number)
                    }
                  >
                    <p className="capitalize text-xs">copy number</p>
                  </button>
                </div>
                <div className="flex w-full mt-8">
                  <p className="font-bold">{item.bank_number}</p>
                </div>
                <div className="flex w-full mt-2">
                  <p className="text-gray-500">a.n. {item.owner}</p>
                </div>
              </div>
            );
          })}
        </section>
      </Dialog>
    );
  };

  return (
    <>
      <section
        className="relative flex flex-col mt-10"
        style={{ marginLeft: 16, marginRight: 16 }}
      >
        <div className="absolute left-0 hidden md:block">
          <img src="/assets/flower-6.png" alt="" />
        </div>
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
            <button
              className="btn btn-primary uppercase"
              type="button"
              onClick={handleDialog}
            >
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
        <form className="relative" action="">
          <div className="absolute w-3/5 right-0 bottom-0 hidden md:block">
            <img src="/assets/flower-9.png" alt="" />
          </div>
          <div className="flex flex-col items-start my-4 md:w-3/5 md:mx-auto">
            <Fade bottom delay={1000}>
              <div className="flex flex-col w-full mb-4">
                <label htmlFor="name" className="font-semibold capitalize">
                  your name <span className="text-red-600">*</span>
                </label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={form.name}
                  className="bg-white rounded-lg p-4"
                  placeholder="Enter your name..."
                  onChange={handleChange}
                />
              </div>
            </Fade>
            <Fade bottom delay={1300}>
              <div className="flex flex-col w-full">
                <label htmlFor="name" className="font-semibold capitalize">
                  your message <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="text"
                  id="text"
                  className="bg-white rounded-lg p-4"
                  placeholder="Enter your message..."
                  rows="4"
                  onChange={handleChange}
                  value={form.text}
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className={`btn btn-primary uppercase w-full my-4 ${
                    disabled
                      ? "disabled:opacity-50 disabled:cursor-not-allowed"
                      : ""
                  }`}
                  disabled={disabled}
                  onClick={handleSubmit}
                >
                  {loading ? <Spinner /> : "kirim pesan"}
                </button>
              </div>
            </Fade>
            <Fade delay={1500}>
              <div className="flex justify-center mt-8 mb-4 w-full">
                <p className="font-bold primary-color uppercase tracking-widest">
                  harapan dan doa
                </p>
              </div>
            </Fade>
            <Fade delay={1000}>
              <section className="bg-white w-full h-60 p-4 overflow-y-auto overflow-x-hidden">
                {wishes.length === 0 && (
                  <div className="h-full w-full flex justify-center items-center">
                    <p className="text-gray-400">
                      Be the first to give a whises!
                    </p>
                  </div>
                )}
                {wishes.map((wish, i) => {
                  return <ItemWishes key={i} data={wish} />;
                })}
              </section>
            </Fade>
          </div>
        </form>
      </section>
      {renderDialog()}
    </>
  );
}

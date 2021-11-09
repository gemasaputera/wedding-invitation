import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import dataEvent from "../../json/DataAkad.json";
import dataResepsi from "../../json/DataResepsi.json";

export default function Event() {
  const calculateTime = () => {
    let dueDate = new Date("2021-11-21 08:00:00 GMT+0700 (Indochina Time)");
    const d = new Date();

    const localTime = d.getTime();

    const localOffset = d.getTimezoneOffset() * 60000;

    const utc = localTime + localOffset;
    const differentDate = +dueDate - +utc;
    let timeLeft = {};

    if (differentDate > 0) {
      timeLeft = {
        days: Math.floor(differentDate / (1000 * 60 * 60 * 24)),
        hours: Math.floor((differentDate / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((differentDate / 1000 / 60) % 60),
        seconds: Math.floor((differentDate / 1000) % 60),
      };
    }

    return timeLeft;
  };
  const [timeLeft, setTimeLeft] = useState(calculateTime());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTime());
    }, 1000);
  });

  return (
    <>
      <Fade delay={300}>
        <section className="relative bg-white flex flex-col justify-center drop-shadow-md w-full p-4 lg:max-w-4xl lg:mx-auto rounded-lg mt-10">
          <div className="relative flex flex-col w-full justify-center items-center mt-4">
            <h3 className="font-bold text-2xl uppercase text-center tracking-widest primary-color z-10">
              acara akan diselenggarakan
            </h3>
            <div className="flex flex-col items-center mt-16 mb-4 z-10">
              <h2 className="font-serif text-5xl primary-color">
                {timeLeft.days}
              </h2>
              <p className="font-bold uppercase">hari</p>
            </div>
            <div className="flex justify-evenly w-full items-center mb-16 z-10">
              <div className="flex flex-col items-center">
                <h2 className="font-serif text-2xl primary-color">
                  {timeLeft.hours}
                </h2>
                <p className="font-bold uppercase">jam</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-serif text-2xl primary-color">
                  {timeLeft.minutes}
                </h2>
                <p className="font-bold uppercase">menit</p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="font-serif text-2xl primary-color">
                  {timeLeft.seconds}
                </h2>
                <p className="font-bold uppercase">detik</p>
              </div>
            </div>
            <div className="absolute inset-0 w-full flex justify-center z-0 ">
              <img src="/assets/line-01.png" alt="" />
            </div>
          </div>
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
              <p className="uppercase font-bold tracking-widest primary-color">
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
              <p className="uppercase font-bold tracking-widest primary-color">
                resepsi
              </p>
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
                Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila,
                Bapak / Ibu / Saudara / i. berkenan hadir untuk memberikan do'a
                restunya kami ucapkan terimakasih.
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
    </>
  );
}

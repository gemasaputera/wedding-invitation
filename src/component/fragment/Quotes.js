import React from "react";

export default function Quotes() {
  return (
    <section className="relative flex justify-center md:w-3/5 mx-auto mt-16">
      <div className="absolute inset-0 w-full flex justify-center z-0 ">
        <img src="/assets/line-01.png" alt="" />
      </div>
      <div className="z-10">
        <p className="text-center italic">
          "Dan Diantara tanda-tanda kebesaran-Nya ialah diciptakan-Nya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu mendapatkan ketenangan
          hati dan dijadikan-Nya kasih sayang diantara kamu sesungguhnya yang
          demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
          berfikir"
        </p>
        <p className="text-center italic font-bold mt-4">(Surat Ar-Ruum:21)</p>
      </div>
    </section>
  );
}

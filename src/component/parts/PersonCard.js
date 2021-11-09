import React from "react";

export default function PersonCard({ reverse, data }) {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse md:flex-col" : "md:flex-col"
      } mb-3 bg-white p-4 rounded-lg drop-shadow-sm hover:drop-shadow-lg`}
    >
      <div className="md:flex md:flex-col md:justify-center md:items-center">
        <div className="w-24 h-24 md:w-40 md:h-40 md:bg-gray-200 md:rounded-full md:p-2">
          <img src={data.img} alt={data.name} priority />
        </div>
        <div className="flex justify-evenly mt-3">
          {data.social.map((item, i) => {
            return (
              <a
                className="hover:opacity-60 mx-1"
                href={item.url}
                target="_blank"
                key={item.name}
              >
                <img
                  className=" w-4 h-4 md:w-6 md:h-6"
                  src={item.icon}
                  alt={item.name}
                />
              </a>
            );
          })}
        </div>
      </div>
      <div className={`flex flex-col ${reverse ? "pr-3" : "pl-3"} md:mt-8`}>
        <p
          className={`text-lg font-semibold ${
            reverse ? "text-right" : "text-left"
          } md:text-center md:text-xl`}
        >
          {data.name}
        </p>
        <p
          className={`text-sm font-light ${
            reverse ? "text-right" : "text-left"
          } md:text-center`}
        >
          Putr{data.gender === "P" ? "i" : "a"} dari:
        </p>
        <p
          className={`text-sm font-light ${
            reverse ? "text-right" : "text-left"
          } md:text-center`}
          style={{ color: "#F3775F" }}
        >
          Bpk {data.father} & Ibu {data.mother}
        </p>
      </div>
    </div>
  );
}

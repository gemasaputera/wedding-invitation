import React from "react";

export default function PersonCard({ reverse, data }) {
  return (
    <div
      className={`flex ${
        reverse ? "flex-row-reverse" : ""
      } mb-3 bg-white p-4 rounded-lg drop-shadow-sm hover:drop-shadow-lg`}
    >
      <div>
        <img src={data.img} alt={data.name} height={100} width={100} />
        <div className="flex justify-evenly mt-3">
          {data.social.map((item, i) => {
            return (
              <a
                className="hover:opacity-60"
                href={item.url}
                target="_blank"
                key={item.name}
              >
                <img src={item.icon} alt={item.name} width={20} height={20} />
              </a>
            );
          })}
        </div>
      </div>
      <div className={`flex flex-col ${reverse ? "pr-3" : "pl-3"}`}>
        <p
          className={`text-lg font-semibold ${
            reverse ? "text-right" : "text-left"
          }`}
        >
          {data.name}
        </p>
        <p
          className={`text-sm font-light ${
            reverse ? "text-right" : "text-left"
          }`}
        >
          Putr{data.gender === "P" ? "i" : "a"} dari:
        </p>
        <p
          className={`text-sm font-light ${
            reverse ? "text-right" : "text-left"
          }`}
          style={{ color: "#F3775F" }}
        >
          Bpk {data.father} & Ibu {data.mother}
        </p>
      </div>
    </div>
  );
}

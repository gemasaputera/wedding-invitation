import React from "react";

export default function PersonCard({ reverse, data }) {
  return (
    <div
      className="flex"
      style={{
        flexDirection: reverse ? "row-reverse" : "row",
        marginBottom: 10,
      }}
    >
      <div>
        <img src={data.img} alt={data.name} height={100} width={100} />
        <div
          className="flex"
          style={{ marginTop: 10, justifyContent: "space-evenly" }}
        >
          {data.social.map((item, i) => {
            return (
              <div className="" key={item.name}>
                <img src={item.icon} alt={item.name} width={20} height={20} />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="flex flex-col"
        style={{
          paddingLeft: reverse ? 0 : 10,
          paddingRight: reverse ? 10 : 0,
        }}
      >
        <p className="text-lg" style={{ fontWeight: "600" }}>
          {data.name}
        </p>
        <p
          className="text-sm"
          style={{ fontWeight: "300", textAlign: reverse ? "right" : "left" }}
        >
          Putr{data.gender === "P" ? "i" : "a"} dari:
        </p>
        <p
          className="text-sm"
          style={{
            fontWeight: "300",
            color: "#F3775F",
            textAlign: reverse ? "right" : "left",
          }}
        >
          Bpk {data.father} & Ibu {data.mother}
        </p>
      </div>
    </div>
  );
}

import React from "react";

export default function WeddingAnnouncement() {
  return (
    <div
      className="container mx-auto flex flex-col items-center"
      style={{ marginTop: "5rem" }}
    >
      <p className="font-serif text-2xl	" style={{ marginBottom: 5 }}>
        Iga & Gema
      </p>
      <p className="font-serif text-2xl	" style={{ marginBottom: 5 }}>
        Wedding Announcement
      </p>
      <p style={{ fontSize: 12, color: "#969696", marginBottom: 20 }}>
        Original build by{" "}
        <span>
          <a
            style={{ cursor: "pointer", textDecoration: "underline" }}
            href="https://www.linkedin.com/in/gemasaputera/"
            target="_blank"
          >
            gemasaputera
          </a>
        </span>
      </p>
      <div>
        <img
          src="/assets/flower-2.png"
          alt=""
          style={{ marginBottom: "-1.5rem" }}
        />
      </div>
    </div>
  );
}

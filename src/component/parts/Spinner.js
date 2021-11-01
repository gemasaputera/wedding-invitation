import React from "react";

export default function Spinner() {
  return (
    <div>
      <div
        style={{ borderTopColor: "transparent" }}
        className="w-10 h-10 border-4 border-white m-auto border-solid rounded-full animate-spin"
      ></div>
    </div>
  );
}

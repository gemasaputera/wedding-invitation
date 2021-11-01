import React from "react";
import GalleryList from "../parts/GalleryList";
import data from "../../json/ImageGallery.json";

export default function Gallery() {
  return (
    <>
      <div className="mt-10 lg:max-w-4xl lg:mx-auto">
        <GalleryList data={data} />
      </div>
    </>
  );
}

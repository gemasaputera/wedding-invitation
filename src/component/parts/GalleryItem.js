import React, { memo } from "react";

function GalleryItem({ data, image, onClick }) {
  const handleViewImage = (item) => {
    onClick(item);
  };

  return (
    <div
      className="relative h-24 w-full md:h-60 md:w-full"
      onClick={() => handleViewImage(data)}
    >
      <div
        className="bg-cover bg-center h-24 w-full md:h-60 md:w-full"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-black opacity-25 hover:opacity-0 cursor-pointer transition-all flex justify-center items-center">
        <p className="text-sans font-light uppercase text-white tracking-widest text-xs sm:text-sm md:text-3xl">
          iga & gema
        </p>
      </div>
    </div>
  );
}

export default memo(GalleryItem);

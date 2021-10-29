import React, { useState } from "react";
import Fade from "react-reveal/Fade";

export default function GalleryList({ data }) {
  const [item, setItem] = useState(null);

  const handleViewImage = (image) => {
    setItem(image);
  };

  return (
    <section className="relative grid grid-cols-3 gap-4 justify-center items-center">
      {data.map((item, i) => {
        return (
          <Fade key={i} bottom delay={500 * i}>
            <div
              className="relative h-24 w-full md:h-60 md:w-full"
              onClick={() => handleViewImage(item)}
            >
              <div
                className="bg-cover bg-center h-24 w-full md:h-60 md:w-full"
                style={{ backgroundImage: `url(${item.imgUrl})` }}
              />
              <div className="absolute inset-0 bg-black opacity-25 hover:opacity-0 cursor-pointer transition-all flex justify-center items-center">
                <p className="text-sans font-light uppercase text-white tracking-widest">
                  iga & gema
                </p>
              </div>
            </div>
          </Fade>
        );
      })}
      {item && (
        <div className="absolute inset-0 bg-gray-400 flex justify-center items-center z-40">
          <div className="w-4/5 h-60 flex justify-center items-center">
            <img src={item.imgUrl} alt={item.id} className="w-full " />
          </div>
        </div>
      )}
    </section>
  );
}

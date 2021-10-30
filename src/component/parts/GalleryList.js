import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Dialog from "./Dialog";

export default function GalleryList({ data }) {
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleViewImage = (image) => {
    setItem(image);
    setOpen(true);
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
                <p className="text-sans font-light uppercase text-white tracking-widest text-xs sm:text-sm xl:text-3xl">
                  iga & gema
                </p>
              </div>
            </div>
          </Fade>
        );
      })}
      {item && (
        <Dialog open={open} onClose={() => setOpen(false)} auto>
          <div className="flex justify-center w-full max-h-96">
            <div className="flex justify-center w-full">
              <img src={item.imgUrl} alt={item.id} className="h-full" />
            </div>
          </div>
        </Dialog>
      )}
    </section>
  );
}

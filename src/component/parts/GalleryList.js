import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Dialog from "./Dialog";
import GalleryItem from "./GalleryItem";

export default function GalleryList({ data }) {
  const [item, setItem] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClick = (image) => {
    setItem(image);
    setOpen(true);
  };

  return (
    <section className="relative grid grid-cols-3 gap-2 md:gap-4  justify-center items-center">
      {data.map((item, i) => {
        return (
          <Fade key={i} bottom delay={250 * i}>
            <GalleryItem
              data={item}
              image={item.imgUrl}
              onClick={handleClick}
            />
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

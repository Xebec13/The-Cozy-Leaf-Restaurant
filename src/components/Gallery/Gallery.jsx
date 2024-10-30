import React from "react";
import "./gallery.css";

import { images } from "../../constants/index";

const galleryImages = [
  images.gallery1,
  images.gallery2,
  images.gallery3,
  images.gallery5,
  images.gallery6,
  images.gallery7,
];

const Gallery = () => {
  return (
    <section className="cozy-leaf__gallery-container" id="gallery">
      {galleryImages.map((image, index) => (
        <div className="cozy-leaf__gallery-wrapper" key={index}>
          <img src={image} alt={`gallery${index + 1}`} />
        </div>
      ))}
    </section>
  );
};

export default Gallery;

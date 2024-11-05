import React from "react";
import "./gallery.css";

import { data } from "../../constants/index";

const Gallery = () => {
  return (
    <section className="cozy-leaf__gallery-container" id="gallery">
      {data.restaurantGallery.map((item, index) => (
        <div className="cozy-leaf__gallery-wrapper" key={index}>
          <img src={item.image} alt={`gallery${index + 1}`} />
          <div className="cozy-leaf__gallery-content">
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;

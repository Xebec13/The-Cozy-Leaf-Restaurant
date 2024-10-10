import React, {useState} from "react";
import "./gallery.css";

import { data } from "../../constants/index";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="cozy-leaf__gallery-container" id='gallery'>
      {data.restaurantGallery.map((item, index) => (
        <div
          key={index}
          className="cozy-leaf__gallery-card"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {hoveredIndex === index ? (
            <div className="cozy-leaf__gallery-info">
              <p>"{item.text}"</p>
              
            </div>
          ) : (
            <img src={item.image} alt={`gallery-image-${index}`} />
          )}
        </div>
      ))}
    </section>
  );
};

export default Gallery;

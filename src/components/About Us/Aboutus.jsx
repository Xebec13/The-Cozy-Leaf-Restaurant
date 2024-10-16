import React from "react";
import "./aboutus.css";

import { images, data } from "../../constants/index";

const Aboutus = () => {
  return (
    <section className="cozy-leaf__aboutus-container" id="aboutus">
      <div className="cozy-leaf__aboutus-photo">
        <img src={images.greenFood} alt="restaurant" />
      </div>
      <div className="cozy-leaf__aboutus-title">
        <div className="cozy-leaf__aboutus-heading">
          <h1>{data.restaurantInfo[1].title1}</h1>
          <h1>{data.restaurantInfo[1].title2}</h1>
        </div>
        <div className="cozy-leaf__aboutus-info">
          <p>{data.restaurantInfo[1].info}</p>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;

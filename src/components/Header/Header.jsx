import React from "react";
import "./header.css";

import { GiZigzagLeaf } from "react-icons/gi";

import { data, images } from "../../constants/index";

const Header = () => {
  return (
    <section className="cozy-leaf__header-container" id="header">
      <div className="cozy-leaf__header-photo">
        <img src={images.headerRestaurant} alt="restaurant" />
      </div>
      <div className="cozy-leaf__header-info">
        <h1>{data.restaurantInfo[0].title}</h1>
        <p>{data.restaurantInfo[0].info}</p>
        <div className="cozy-leaf__header-end">
          <p><GiZigzagLeaf className="cozy-leaf__header-icon"/></p>
        </div>
      </div>
    </section>
  );
};

export default Header;
 
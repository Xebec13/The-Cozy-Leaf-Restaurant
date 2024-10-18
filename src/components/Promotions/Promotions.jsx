import React from "react";
import "./promotions.css";
import { data } from "../../constants/index";

const Promotions = () => {
  return (
    <section className="cozy-leaf__promotions-container" id='sales'>
      <div className="cozy-leaf__promotions-title">
        <h1>Restaurant's Offer</h1>
      </div>
      <div className="cozy-leaf__promotions-info">
        {data.restaurantPromotions.map((promotion, index) => (
          <div key={index}>
            <h2>{promotion.promotion}</h2>
            <p>{promotion.info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promotions;

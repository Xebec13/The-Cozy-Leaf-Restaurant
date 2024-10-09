import React from "react";
import "./promotions.css";

import { data } from "../../constants/index";

const Promotions = () => {
  return (
    <section className="cozy-leaf__promotions-container" id='sales'>
      <div className="cozy-leaf__promotions-title">
        <h1>Restaurant's Special Offer</h1>
      </div>
      <div className="cozy-leaf__promotions-info">
        <div>
          <h2>{data.restaurantPromotions[0].promotion}</h2>
          <p>{data.restaurantPromotions[0].info}</p>
        </div>
        <div>
          <h2>{data.restaurantPromotions[1].promotion}</h2>
          <p>{data.restaurantPromotions[1].info}</p>
        </div>
        <div>
          <h2>{data.restaurantPromotions[2].promotion}</h2>
          <p>{data.restaurantPromotions[2].info}</p>
        </div>
        <div>
          <h2>{data.restaurantPromotions[3].promotion}</h2>
          <p>{data.restaurantPromotions[3].info}</p>
        </div>
        <div>
          <h2>{data.restaurantPromotions[4].promotion}</h2>
          <p>{data.restaurantPromotions[4].info}</p>
        </div>
      </div>
    </section>
  );
};

export default Promotions;

import React from "react";
import "./footer.css";

import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

import { images } from "../../constants/index";

const Footer = () => {
  return (
    <section className="cozy-leaf__footer-container" id="footer">
      <div className="cozy-leaf__footer-photo">
        <img src={images.pinkRestaurant} alt="" />
      </div>
      <div className="cozy-leaf__footer-info">
        <h1>Visit us, call us. We’re just a step away!</h1>
        <div className="cozy-leaf__footer-info-container">
          <div className="cozy-leaf__footer-time">
            <p>
              <span>Tuesday:</span> <span>11:00 – 12:00</span>
            </p>
            <p>
              <span>Wednesday:</span> <span>11:00 – 12:00</span>
            </p>
            <p>
              <span>Thursday:</span> <span>11:00 – 12:00</span>
            </p>
            <p>
              <span>Friday:</span> <span>11:00 – 12:00</span>
            </p>
            <p>
              <span>Saturday:</span> <span>11:00 – 12:00</span>
            </p>
            <p>
              <span>Sunday:</span> <span>11:00 – 12:00</span>
            </p>
            <p>
              <span>Monday:</span> <span>Closed</span>
            </p>
          </div>
          <div className="cozy-leaf__footer-icons">
            <p>
              <FaInstagramSquare className="footer-icon" /> <FaFacebookF className="footer-icon" />
            </p>
            <p>contact@cozy-leaf.eu</p>
            <p>690 654 666</p>
            <p className="cozy-leaf__footer-company">Brought to life by Xebec13 – DMC. <img src={images.dmcLogo} alt="" /></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

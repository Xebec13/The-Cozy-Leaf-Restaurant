import React from "react";
import "./footer.css";

import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

import { images } from "../../constants/index";

const Footer = () => {
  return (
    <section className="cozy-leaf__footer-container">
      <div className="cozy-leaf__footer-info">
        <div className="cozy-leaf__footer-photo">
          <img src={images.leaf5} alt="" />
        </div>
        <h1>Visit us, call us, or order online. We’re just a step away!</h1>
        <div className="cozy-leaf__footer-info-time">
          <p>Tuesday: 11:00 AM – 12:00 AM</p>
          <p>Wednesday: 11:00 AM – 12:00 AM</p>
          <p>Thursday: 11:00 AM – 12:00 AM</p>
          <p>Friday: 11:00 AM – 12:00 AM</p>
          <p>Saturday: 11:00 AM – 12:00 AM</p>
          <p>Sunday: 11:00 AM – 12:00 AM</p>
          <p>Monday: Closed</p>
        </div>
        <div className="cozy-leaf__footer-icons">
          <p><FaInstagramSquare size={55}/> <FaFacebookF size={55}/></p>
          <p>contact@cozy-leaf.pl</p>
          <p>690 654 666</p>
        </div>
        <span>Brought to life by Xebec13 – DMC Company. <img src={images.dmcLogo} alt="" /></span>
      </div>
    </section>
  );
};

export default Footer;

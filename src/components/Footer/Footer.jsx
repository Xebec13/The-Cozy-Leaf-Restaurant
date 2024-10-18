import React from "react";
import "./footer.css";

import { FaFacebookF, FaInstagramSquare } from "react-icons/fa";

import { images } from "../../constants/index";

const Footer = () => {
  return (
    <section className="cozy-leaf__footer-container" id='footer'>
      <div className="cozy-leaf__footer-info">
        <div className="cozy-leaf__footer-photo">
          <img src={images.leaf6} alt="" />
        </div>
        <h1>Visit us, call us, or order online. We’re just a step away!</h1>
        <div className="cozy-leaf__footer-info-time">
          <p><span>Tuesday:</span> <span>11:00 AM – 12:00 AM</span></p>
          <p><span>Wednesday:</span> <span>11:00 AM – 12:00 AM</span></p>
          <p><span>Thursday:</span> <span>11:00 AM – 12:00 AM</span></p>
          <p><span>Friday:</span> <span>11:00 AM – 12:00 AM</span></p>
          <p><span>Saturday:</span> <span>11:00 AM – 12:00 AM</span></p>
          <p><span>Sunday:</span> <span>11:00 AM – 12:00 AM</span></p>
          <p><span>Monday:</span> <span>Closed</span></p>
        </div>
        <div className="cozy-leaf__footer-icons">
          <p><FaInstagramSquare size={55}/> <FaFacebookF size={55}/></p>
          <p>contact@cozy-leaf.pl</p>
          <p>690 654 666</p>
        </div>
        <span>Brought to life by Xebec13 – DMC. <img src={images.dmcLogo} alt="" /></span>
      </div>
    </section>
  );
};

export default Footer;

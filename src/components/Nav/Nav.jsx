import React from "react";
import "./nav.css";

import { ImLeaf } from "react-icons/im";

const Nav = () => {
  return (
    <div className="cozy-leaf__navbar-container" id="navbar">
      <div className="cozy-leaf__navbar-logo">
        <ImLeaf style = {{transform: 'rotate(20deg)' }} size={75} color="#f08590" />
      </div>
      <div className="cozy-leaf__navbar-links">
        <p>
          <a href="#sales">Sales</a>
        </p>
        <p>
          <a href="#aboutus">About us</a>
        </p>
        <p>
          <a href="#reservation">Reservation</a>
        </p>
        <p>
          <a href="#gallery">Gallery</a>
        </p>
        <p>
          <a href="#contact">Contact</a>
        </p>
      </div>
    </div>
  );
};

export default Nav;

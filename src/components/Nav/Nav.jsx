import React, { useState, useEffect } from "react";
import "./nav.css";

import { ImLeaf } from "react-icons/im";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoCalendar, IoImages } from "react-icons/io5";
import { FaMoneyCheckAlt, FaSearch } from "react-icons/fa";

const Nav = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrollingUp(currentScrollPos < lastScrollPos); // Show navbar on scroll up
      setLastScrollPos(currentScrollPos);
    };

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 600); // Set mobile view state based on screen size
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initialize resize on mount
    handleResize();

    // Cleanup event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollPos]);

  return (
    <div
      className={`cozy-leaf__navbar-container ${
        isScrollingUp ? "show" : "hide"
      }`}
      id="navbar"
    >
      <div className="cozy-leaf__navbar-logo">
        <p>
          <a href="#header">
            <ImLeaf className="cozy-leaf__navbar-icon" />
          </a>
        </p>
      </div>
      {isMobileView ? (
        <div className="cozy-leaf__navbar-mobile">
          <p><a href="#header"><ImLeaf /></a></p>
          <p><a href="#sales"><FaMoneyCheckAlt /></a></p>
          <p><a href="#aboutus"><FaPeopleGroup /></a></p>
          <p><a href="#reservation"><IoCalendar /></a></p>
          <p><a href="#gallery"><IoImages /></a></p>
          <p><a href="#footer"><FaSearch /></a></p>
        </div>
      ) : (
        <div className="cozy-leaf__navbar-links">
          <p><a href="#sales">Sales</a></p>
          <p><a href="#aboutus">About us</a></p>
          <p><a href="#reservation">Reservation</a></p>
          <p><a href="#gallery">Gallery</a></p>
          <p><a href="#footer">Contact</a></p>
        </div>
      )}
    </div>
  );
};

export default Nav;

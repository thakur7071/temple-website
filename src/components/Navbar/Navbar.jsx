import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Effect to handle adding/removing no-scroll class
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen]);

  return (
    <div>
      <div className="navbar">
        <h2 className="logo">Gov. of Uttar Pradesh</h2>

        {/* Mobile Menu Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>

        {/* Desktop Navigation */}
        <div className="nav-right">
          <a href="#" className="social-icon"><FaFacebook size={20} /></a>
          <a href="#" className="social-icon"><FaTwitter size={20} /></a>
          <a href="#" className="social-icon"><FaInstagram size={20} /></a>
          <div className="separator"></div>
          <button className="nav-btn">Hindi</button>
          <div className="separator"></div>
          <button className="nav-btn">Public Dashboard</button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>Temples</li>
          <li>Sevas & Darshan</li>
          <li>Online Booking</li>
          <li>Media Room</li>
          <li>Support</li>
          <li>Volunteer</li>
          <li>Print a Ticket</li>
        </ul>

        {/* Social Icons & Buttons in Mobile Menu */}
        <div className="mobile-extra">
          <a href="#" className="social-icon"><FaFacebook size={20} /></a>
          <a href="#" className="social-icon"><FaTwitter size={20} /></a>
          <a href="#" className="social-icon"><FaInstagram size={20} /></a>
          <button className="nav-btn">Hindi</button>
          <button className="nav-btn">Public Dashboard</button>
        </div>
      </div>

      {/* Navbar Bottom Section (Hidden in Mobile) */}
      <div className="navbar-down">
        <ul className="nav-link-down-left">
          <li>Temples</li>
          <li>Sevas & Darshan</li>
          <li>Online Booking</li>
          <li>Media Room</li>
          <li>Support</li>
        </ul>
        <ul className="nav-link-down-right">
          <li>Volunteer</li>
          <li>Print a Ticket</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

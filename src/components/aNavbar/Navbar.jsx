import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/Icons/BrainFlix-logo.svg";
import searchIcon from "../../assets/Icons/search.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import "../aNavbar/Navbar.scss";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="BrainFlix logo" />
        </Link>
      </div>
      <div className="navbar__content">
        <div className="navbar__search">
          <img src={searchIcon} alt="Search" className="navbar__search-icon" />
          <input type="text" placeholder="Search" className="navbar__search-input" />
        </div>
        <div className="navbar__avatar-mobile">
          <img src={avatar} alt="profile avatar"/>
        </div>
      </div>
      <Link to="/upload" className="navbar__button">
        <span>UPLOAD</span>
      </Link>
      <div className="navbar__avatar-desktop">
        <img src={avatar} alt="profile avatar"/>
      </div>
    </nav>
  );
}

export default Navbar;
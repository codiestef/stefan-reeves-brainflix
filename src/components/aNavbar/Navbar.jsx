import React from 'react';
import "../aNavbar/Navbar.scss";
import logo from "../../assets/Icons/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";
import searchIcon from "../../assets/Icons/search.svg";

  function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="BrainFlix logo" />
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
        <div className="navbar__button">
          <img src={uploadIcon} alt="Upload Icon" className="navbar__button-icon"/>
          <span>UPLOAD</span>
        </div>
        <div className="navbar__avatar-desktop">
            <img src={avatar} alt="profile avatar"/>
        </div>
      </nav>
    );
}

export default Navbar;
import React from 'react';
import "./Navbar.scss";
import logo from "../../assets/Icons/BrainFlix-logo.svg";
import avatar from "../../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/Icons/upload.svg";

function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="BrainFlix logo" />
        </div>
        <div className="navbar__search-container">
          <input type="text" className="navbar__search" placeholder="Search..." />
          <div className="navbar__profile">
            <img src={avatar} alt="profile avatar" className="navbar__avatar"/>
          </div>
        </div>
        <button className="navbar__button">
          <img src={uploadIcon} alt="Upload Icon" className="navbar__icon"/>
          UPLOAD
        </button>
      </nav>
    );
  }
  
  export default Navbar;
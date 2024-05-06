import React from 'react';
import "../styles/componentstyles/Navbar.scss";
import logo from "../assets/Icons/BrainFlix-logo.svg";
import avatar from "../assets/Images/Mohan-muruge.jpg";
import uploadIcon from "../assets/Icons/upload.svg";
import searchIcon from "../assets/Icons/search.svg";

// function Navbar() {
//     return (
//       <nav className="navbar">
//         <div className="navbar__logo">
//           <img src={logo} alt="BrainFlix logo" />
//         </div>
//         <div className="navbar__search-upload-container">
//           <div className="navbar_searchbox">
//             <input type="text" className="navbar__search" placeholder="Search" />
//           </div>
//           <div className="navbar__upload">
//             <button className="navbar__button">
//             <img src={uploadIcon} alt="Upload Icon" className="navbar__icon"/>
//             UPLOAD
//             </button>
//           </div>
//         </div>

//         <div className="navbar__profile">
//           <img src={avatar} alt="profile avatar" className="navbar__avatar"/>
//         </div>
//       </nav>
//     );
//   }
  
//   export default Navbar;

  // function Navbar() {
  //   return (
  //     <nav className="navbar">
  //       <div className="navbar__logo">
  //         <img src={logo} alt="BrainFlix logo" />
  //       </div>
  //       <div className="navbar__search-upload-container">
  //         <input type="text" className="navbar__search" placeholder="Search" />
  //         <div className="navbar__profile">
  //         <button className="navbar__button">
  //         <img src={uploadIcon} alt="Upload Icon" className="navbar__icon"/>
  //         UPLOAD
  //       </button>
  //         </div>
  //       </div>

  //       <div className="navbar__profile">
  //           <img src={avatar} alt="profile avatar" className="navbar__avatar"/>
  //         </div>
  //     </nav>
  //   );
  // }
  
  // export default Navbar;

  function Navbar() {
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <img src={logo} alt="BrainFlix logo" />
        </div>

          <div className="navbar__search-avatar">
            <div className="navbar_searchbox">
              <input type="text" className="navbar__search" placeholder="Search" />
            </div>
            <div className="navbar__profile">
              <img src={avatar} alt="profile avatar" className="navbar__avatar"/>
            </div>
          </div>
          <div className="navbar__upload">
            <button className="navbar__button">
              <img src={uploadIcon} alt="Upload Icon" className="navbar__icon"/>
              UPLOAD
            </button>
          </div>

      </nav>
    );
}

export default Navbar;
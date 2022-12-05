import React from "react";
import logo from "../../src/assets/dp-logo-final 1.png";

const Header = () => {
  return (
    <div className="d-flex justify-content-between header">
      <img src={logo} className="header-logo" alt="Logo" />
      <div className="nav-button d-flex">
        <span className="aboutUs d-flex">About Us</span>
        <span className="break"></span>
        <span className="contactUs d-flex">Contact Us</span>
        <span className="learnMore d-flex">Learn More</span>
      </div>
  
    </div>
    
  )   
}
export default Header;
       
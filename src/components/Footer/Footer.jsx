import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Instagram} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
          <p className="tech">Copyright<sup >&copy;</sup> All Reserved Rights <span>RICHSON TECH. 2023</span></p>
      
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
    </div>
  );
};

export default Footer;

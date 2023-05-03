import React from "react";
import image from "../assets/images.png";
import Fader from "./Fader";

const Footer = () => {
  return (
    <div className="footer-div">
      <img src={image} alt="imah" />
      
      <h1><Fader/></h1>
      
    </div>
  );
};

export default Footer;

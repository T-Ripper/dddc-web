import React from "react";
import dddc from "../../assets/dddc.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Containerss">
      <img src={dddc} alt="logo" />
      <h3> Divine Dominion Deliverance Church</h3>
      <h4>
        {" "}
        &copy; Copyright DDDC 2022. All right reserve. Designed and Developed by
        DDDC IT department
      </h4>

      <div className="icon">
        <i className="big youtube red icon"></i>
        <i className="big facebook blue icon"></i>
        <i className="big instagram pink icon"></i>
        <i className="big mail blue icon"></i>
      </div>
    </div>
  );
};

export default Footer;

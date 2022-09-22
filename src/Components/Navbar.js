import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import dddc from "../assets/dddc.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => {
    setNavbar(!navbar);
  };
  const closeMobileMenu = () => {
    setNavbar(false);
    console.log("check");
  };
  const secondNavbar = () => {
    setDropdown(!dropdown);
    if (setDropdown) {
      handleClick();
    }
    console.log("click");
  };
  return (
    <div className="navbar">
      <div className="header">
        <img src={dddc} alt="logo" />
      </div>
      <ul
        className={navbar ? "navlist-active" : "navlist"}
        onClick={closeMobileMenu}
      >
        <Link to="/">
          <li>Home</li>
        </Link>
        <li onClick={secondNavbar}>About Us</li>
        <ul className={dropdown ? "Dropdown" : "set"}>
          <Link to="/history">
            <li>Our History</li>
          </Link>

          <li> Mission and Vision</li>

          <Link to="/belief">
            <li>Our Beliefs</li>
          </Link>

          <Link to="/uniqueness">
            <li>Our Uniqness</li>
          </Link>
        </ul>
        <Link to="/media">
          <li>Media Center</li>
        </Link>
        <Link to="give">
          <li>Give Online</li>
        </Link>
        <Link to="/contactUs">
          <li>Contact Us</li>
        </Link>
      </ul>
      <div className="icons " onClick={handleClick}>
        {navbar ? (
          <i className=" bid x icon  "></i>
        ) : (
          <i className="big bars icon  "></i>
        )}
        {/* {setDropdown ? setNavbar(false) : setNavbar(!false)} */}
      </div>
    </div>
  );
};

export default Navbar;

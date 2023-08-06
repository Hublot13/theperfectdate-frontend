import React from "react";
import "./Navbar.css";
import { ImLocation } from "react-icons/im";

import Logo from "../../../assets/images/the_perfect_date.svg";

const Navbar = () => {
  return (
    <div className="nav-container nav-shadow">
      <div className="_top-traction-bar"></div>
      <div className="flex-container">
        <div className="logo-container">
          <img className="date-logo" src={Logo} alt="The Perfect Date Logo" />
        </div>
        <div className="location-container">
          <p>
            <ImLocation />
            Pune
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

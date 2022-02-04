import React, { useState } from "react";

// importing images
import Logo from "../images/spaceXlogo.png";

// importing router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header">
        <Link to="/">
          <div className="logoContainer">
            <img src={Logo} alt="Logo" />
            <div className="subLogo">
              <h3>MISSION CONTROL</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

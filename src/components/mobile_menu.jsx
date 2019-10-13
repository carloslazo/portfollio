import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function MobileMenu(props) {
  return <div className="Mobile-menu-grid">
    <div className="Mobile-menu-1st-row"></div>
    <div className="Mobile-menu-2nd-row-background"/>
    <div name="dropdown" onClick={props.handleChange}className="Mobile-menu-2nd-row">X</div>

    <div className="Mobile-menu-3rd-row">
      <NavLink
        to="/about"
        activeStyle={{
          color: "#CAA7E5"
        }}
      >
        About
      </NavLink>
    </div>
    <div name="4th-row" className="Mobile-menu-4th-row" onClick={props.handleChange}></div>
  </div>;
}
export default MobileMenu;

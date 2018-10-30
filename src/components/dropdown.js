import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DropDownLogo from "../pictures/dropdown.svg"

function DropDown(props){
    return (
      <div className="Dropdown-picture">
      <img
      name="dropdown"
      onClick={props.handleChange}
      src={DropDownLogo}
      width="50"
      height="50"
    />
      </div>
    );
  }


export default DropDown;

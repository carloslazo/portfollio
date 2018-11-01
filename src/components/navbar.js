import React, { Component } from "react";
import { NavLink } from "react-router-dom";
function NavBar(props){
    return (
      <div className="Page-grid">
        <div className="Nav-grid">
          <a href='/' style={{textDecoration: "none", color: "black"}}>

          <div className="Nav-contact">
            <p id="nav-name">Carlos Lazo</p>
            <p id="nav-title">Front-end Developer</p>
          </div>
        </a>
          <div className="Nav-bar">
            <NavLink
              to="/about"
              activeStyle={{
                color: "#CAA7E5"
              }}
              className="Nav-children"
            >
              About
            </NavLink>

            <p className="Nav-children" style={{ fontWeight: "lighter" }}>
              {" "}
              clazo@berkeley.edu{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }


export default NavBar;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import github from "../pictures/github.svg";
import linkedin from "../pictures/linkedin.png";

function NavBar(props) {
  return (
    <div className="Page-grid">
      <div className="Nav-grid">
        <a
          className="Nav-contact"
          href="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <p>Carlos Lazo</p>
          <p id="nav-title">Front-end Developer</p>
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
            clz1104@gmail.com{" "}
          </p>
          <a href="https://github.com/carloslazo" target="_blank">
            <img src={github} />
          </a>
          <a href="https://www.linkedin.com/in/carlos-lazo/"  target="_blank">
            <img src={linkedin} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "../components/navbar.js";
import DropDown from "../components/dropdown.js";
import MobileMenu from "../components/mobile_menu.jsx";
import arrow from "../pictures/arrow.svg";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }
  handleChange = e => {
    if (e.target.getAttribute("name") === "dropdown") {
      this.setState({ active: !this.state.active });
    } else if (e.target.getAttribute("name") === "4th-row") {
      this.setState({ active: false });
    }
  };
  render() {
    return (
      <div className="Page-grid">
        {/* Mobile header */}
        {this.state.active ? (
          <div className="Overlay-mobile-menu">
            <MobileMenu handleChange={this.handleChange} />
          </div>
        ) : (
          <div className="Dropdown-container">
            <DropDown handleChange={this.handleChange} />
          </div>
        )}
        {/* Web header */}
        <div className="Web-nav-bar">
          <NavBar />
        </div>
        {/* Content */}
        <div className="Content">{this.props.children}</div>
        {/* Arrow */}
        <div className="Top-arrow">
          <a href="#top">
            <svg
              className="cls-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 768.08 513.29"
            >
              <polygon points="0.54 384.04 384.04 0.54 767.54 384.04 733.87 417.7 384.04 67.86 34.2 417.7 0.54 384.04" />
              <polygon points="0.54 479.09 384.04 95.59 767.54 479.09 733.87 512.75 384.04 162.91 34.2 512.75 0.54 479.09" />
            </svg>
          </a>
        </div>
        {/* Footer */}
        <div className="Footer">
          <span className="Footer-background" />
          <span className="Footer-annotations" />
        </div>
      </div>
    );
  }
}

export default Page;

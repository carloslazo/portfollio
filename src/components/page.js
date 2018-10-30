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
    } else if (e.target.getAttribute("name") === "4th-row"){
      this.setState({ active: false });
    }
  };
  render() {
    return (
      <div id="topArrow" className="Page-grid">
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
        <div className="Content" >{this.props.children}</div>
        <a className="topArrow" href="#top">
          <img src={arrow} width="80" height="80" />
        </a>
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

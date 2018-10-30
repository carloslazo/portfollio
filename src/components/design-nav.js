import React, { Component } from "react";

class DesignNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1
    };
  }
  handleChange = e => {
    let number = e.target.getAttribute("name");
    if (number !== this.state.active) {
      this.setState({ active: number });
    }
  };
  render() {
    let inLineStyle = {
      borderRadius: 0,
      width: "50px",
      height: "10px",
      animation: "example .3s linear"
    };
    let styleCheck = n => (this.state.active == n ? inLineStyle : null);
    return (
      <div>
        <div className="Design-nav-grid">
          <p>
            <a name="1" onClick={this.handleChange} href="#empathy">Empathy</a>
          </p>
          <p>
            <a name="2" onClick={this.handleChange} href="#define">Define</a>
          </p>
          <p>
            <a name="3" onClick={this.handleChange} href="#ideate">Ideate</a>
          </p>
          <p>
            <a name="4" onClick={this.handleChange} href="#prototype">Prototype</a>
          </p>
          <p>
            <a name="5" onClick={this.handleChange} href="#test">Test</a>
          </p>
        </div>
        <div className="Design-nav-grid">
          <span name="1"  style={styleCheck(1)} />
          <span name="2"  style={styleCheck(2)} />
          <span name="3"  style={styleCheck(3)} />
          <span name="4"  style={styleCheck(4)} />
          <span name="5"  style={styleCheck(5)} />
        </div>
      </div>
    );
  }
}

export default DesignNav;

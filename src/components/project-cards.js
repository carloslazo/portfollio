import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
function ProjectCards(props) {
    return (
      <a href={'/projects/' + props.page} style={{textDecoration: "none"}}>
        <div className="Project-cards">
          <div className="Project-overlay-cover" style={{backgroundColor: props.color}}/>
          <img
            className="Project-overlay-picture"
            src={require(`../pictures/${props.picture}.png`)

          }
          />
          <p className="Project-overlay-text">
            {props.text} <br /> - - -
          </p>
        </div>
      </a>
    );
}

export default ProjectCards;

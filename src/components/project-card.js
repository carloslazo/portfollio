import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function ProjectCard(props) {
  console.log(props.page);
  return (
    <div className="Project-cards-page-grid">
      <a className="Project-link" href={props.link} target="_blank">
        <img
          className="Project-cards-picture"
          src={require(`../pictures/${props.picture}.png`)}
        />
      </a>
      <div className="Project-card-text">
        <p>{props.title}</p>
          { props.page === undefined ?
            null: <a href={'/projects/' + props.page} style={{color: "#CAA7E5"}}className="project-card-link">
              View Project Details
            </a>}
        <p>
          <b>Link</b>:{" "}
          <a href={props.link} target="_blank">
            {props.link}
          </a>
        </p>
        <p>
          <b>Github</b>:{" "}
          <a href={props.github} target="_blank">
            {props.github}
          </a>
        </p>
        <p>
          <b>Technologies</b>: {props.technologies}
        </p>
        <p>
          <b>Overview</b>: {props.overview}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;

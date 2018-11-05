import React, { Component } from "react";

function ProjectCard(props) {
  return (
    <div className="Project-cards-page-grid">
    <img
      className="Project-cards-picture"
      src={require(`../pictures/${props.picture}.png`)}
    />
    <div className="Project-card-text">
    <p>Genius Annotations</p>
    <p><b>Link</b>: <a href={props.link} target="_blank">{props.link}</a></p>
    <p><b>Github</b>: <a href={props.github} target="_blank">{props.github}</a></p>
    <p><b>Technologies</b>: {props.technologies}</p>
    <p><b>Overview</b>: {props.overview}
</p>

    </div>
    </div>
  );
}

export default ProjectCard;

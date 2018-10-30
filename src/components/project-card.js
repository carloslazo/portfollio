import React, { Component } from "react";

function ProjectCard(props) {
  return (
    <div className="Project-cards-page-grid">
    <img
      className="Project-cards-picture"
      src={require("../pictures/genius2.png")}
    />
    <div className="Project-card-text">
    <p>Genius Annotations</p>
    <p><b>Link</b>: <a href="https://genius-web-app.herokuapp.com/">https://genius-web-app.herokuapp.com/</a></p>
    <p><b>Technologies</b>: React js</p>
    <p><b>Overview</b>: With some fantastic branding and design from Cork-based studio Hurrah Hurrah I helped OMP Architects build a responsive, fast and flexible portfolio website for their extensive list of projects.
</p>

    </div>
    </div>
  );
}

export default ProjectCard;

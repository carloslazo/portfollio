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
    <p><b>Technologies</b>: React, Javascript</p>
    <p><b>Overview</b>: Using the Genius.com API I built a responsive React application that renders a grid of lyric annotations for easy viewing.
</p>

    </div>
    </div>
  );
}

export default ProjectCard;

import React, { Component } from "react";
import Page from "../components/page.js";
import ProjectCards from "../components/project-cards.js";
import AboutCard from "../components/about-card.js";
class About extends Component {
  render() {
    return (
      <Page
        children={
          <>
            <AboutCard />
            <div className="About-picture-grid">
              <ProjectCards
                picture="humaaans"
                text="View humaaans"
                page="4"
              />
              <ProjectCards
                picture="emoji-micro"
                text="View Microinteraction"
                page="2"
              />
              <ProjectCards
                picture="genius2"
                text="View Genius 2.0"
                page="1"
              />
              <ProjectCards
                picture="checkmark"
                text="View recipe"
                page="3"
                color="#7bac20"
              />
            </div>
          </>
        }
      />
    );
  }
}

export default About;

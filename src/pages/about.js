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
                picture="genius2"
                text="View Genius 2.0 project details"
                page="1"
              />
              <ProjectCards
                picture="checkmark"
                text="View recipe project details"
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

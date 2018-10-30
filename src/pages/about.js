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
              <AboutCard/>
              <div className="About-picture-grid">
              <ProjectCards picture="portfollio" text="View portfollio project details" page="1" color="#2859A2"/>
              <ProjectCards picture="genius2" text="View Genius 2.0 project details" page="1"/>
              </div>

            </>
          }
        />
    );
  }
}

export default About;

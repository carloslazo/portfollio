import React, { Component } from "react";
import Page from "../components/page.js";
import ProjectCard from "../components/project-card.js";
import DesignNav from "../components/design-nav.js";
import ThinkingPage from "../components/thinking-page.js";
import DesignSquarePicture from "../components/design-square-picture.js";
import DesignWidePicture from "../components/design-wide-picture.js";
import genius2 from "../pictures/genius2.png";
import wide from "../pictures/wide.png";

class Projects extends Component {
  componentDidMount() {
       window.scrollTo(0, 0);
   }

  render() {
    return (
      <Page
        children={
          <>
            <ProjectCard />
            <DesignNav />
            {designPage[this.props.match.params.id].empathy()}
            {designPage[this.props.match.params.id].define()}
            {designPage[this.props.match.params.id].ideate()}
            {designPage[this.props.match.params.id].prototype()}
            {designPage[this.props.match.params.id].test()}
          </>
        }
      />
    );
  }
}
let designPage = {
  //genius App
  1:{
  color: ["#689DE4", "#5DA965", "#EF933F", "#E7613B", "#932A24"],
  p1:
    "With some fantastic branding and design from Cork-based studio Hurrah Hurrah I helped OMP Architects build a responsive, fast and flexible portfolio website for their extensive list of projects.",
  empathy: function() {
    return (
      <ThinkingPage
        title="Empathy"
        id="empathy"
        children={
          <div className="Thinking-page-grid-1">
            <DesignSquarePicture picture={genius2} color={this.color[0]} />
            <p>{this.p1}</p>
            <DesignWidePicture picture={wide} color={this.color[0]} />
            <p className="wide">{this.p1}</p>
            <DesignSquarePicture picture={genius2} />
            <DesignSquarePicture picture={genius2} />
          </div>
        }
      />
    );
  },
  define: function() {
    return (
      <ThinkingPage
        title="Define"
        id="define"
        children={
          <div className="Thinking-page-grid-1">
            <DesignSquarePicture picture={genius2} color={this.color[1]} />
            <p>{this.p1}</p>
            <DesignWidePicture picture={wide} color={this.color[1]} />
            <p className="wide">{this.p1}</p>
            <DesignSquarePicture picture={genius2} color={this.color[1]} />
            <DesignSquarePicture picture={genius2} color={this.color[1]} />
          </div>
        }
      />
    );
  },
  ideate: function() {
    return (
      <ThinkingPage
        title="Ideate"
        id="ideate"
        children={
          <div className="Thinking-page-grid-1">
            <DesignSquarePicture picture={genius2} color={this.color[2]} />
            <p>{this.p1}</p>
            <DesignWidePicture picture={wide} color={this.color[2]} />
            <p className="wide">{this.p1}</p>
            <DesignSquarePicture picture={genius2} color={this.color[2]} />
            <DesignSquarePicture picture={genius2} color={this.color[2]} />
          </div>
        }
      />
    );
  },
  prototype: function() {
    return (
      <ThinkingPage
        title="Prototype"
        id="prototype"
        children={
          <div className="Thinking-page-grid-1">
            <DesignSquarePicture picture={genius2} color={this.color[3]} />
            <p>{this.p1}</p>
            <DesignWidePicture picture={wide} color={this.color[3]} />
            <p className="wide">{this.p1}</p>
            <DesignSquarePicture picture={genius2} color={this.color[3]} />
            <DesignSquarePicture picture={genius2} color={this.color[3]} />
          </div>
        }
      />
    );
  },
  test: function() {
    return (
      <ThinkingPage
        title="Test"
        id="test"
        children={
          <div className="Thinking-page-grid-1">
            <DesignSquarePicture picture={genius2} color={this.color[4]} />
            <p>{this.p1}</p>
            <DesignWidePicture picture={wide} color={this.color[4]} />
            <p className="wide">{this.p1}</p>
            <DesignSquarePicture picture={genius2} color={this.color[4]} />
            <DesignSquarePicture picture={genius2} color={this.color[4]} />
          </div>
        }
      />
    );
  }
}};


export default Projects;

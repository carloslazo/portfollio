import React, { Component } from "react";
import Page from "../components/page.js";
import ProjectCard from "../components/project-card.js";
import DesignNav from "../components/design-nav.js";
import ThinkingPage from "../components/thinking-page.js";
import DesignSquarePicture from "../components/design-square-picture.js";
import DesignWidePicture from "../components/design-wide-picture.js";
import genius2 from "../pictures/genius2.png";
import wide from "../pictures/wide.png";
import wideLyrics from "../pictures/wideLyrics.png";


class Projects extends Component {
  componentDidMount() {
       window.scrollTo(0, 0);
   }

  render() {
    return (
      <Page
        children={
          <>
            <ProjectCard  />
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
  p1: "This project looks to enhance lyric annotation consumption through UX/UI design.This section will mainly be about my own assumptions and insights to solving the specific problem of creating a better way to read lyric annotations. The lack of user input forced me to put myself in other people's shoes and envision their needs. Yet, I acknowledge that I could be totally wrong to what the major population of users may actually want since these are my own biases.",
  p2: "My research is from personal experience based of frequently going to Genius.com a music lyric website and checking out specific song lyrics for their annotations. Usually when I visited the website I frequently browsed through other song annotations randomly since they were interesting to read not really caring about the specific song.",
  p3: "The behavior of randomly clicking through song lyric fragments to see their respective annotations is the main focus of this empathy section.",
  p4: "The goal is to translate the behavior of mindlessly clicking a simple to use UI. This UI will eliminate the clicking but keep the same outcome of random selected consumption.",
  empathy: function() {
    return (
      <ThinkingPage
        title="Empathy"
        id="empathy"
        children={
          <div className="Thinking-page-grid-1">
            <DesignSquarePicture picture={genius2} color={this.color[0]} />
            <p>{this.p1}</p>
            <DesignWidePicture picture={wideLyrics} color={this.color[0]} />
            <p className="wide">{this.p2}</p>
            <DesignSquarePicture picture={genius2} />
            <DesignSquarePicture picture={genius2} />
              <p className="wide">{this.p3}</p>
                <p className="wide">{this.p4}</p>

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

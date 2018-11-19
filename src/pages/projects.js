import React, { Component } from "react";
import Page from "../components/page.js";
import ProjectCard from "../components/project-card.js";
import DesignNav from "../components/design-nav.js";
import ThinkingPage from "../components/thinking-page.js";
import DesignSquarePicture from "../components/design-square-picture.js";
import DesignWidePicture from "../components/design-wide-picture.js";
//look into dynamic import
import {genius2, wide, e1w, wideCard, squarePr, grid1, halfpage, wideDefine} from "../components/import-pictures.js";

class Projects extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let page = this.props.match.params.id;
    return (
      <Page
        children={
          <>
            <ProjectCard
              link={designPage[page]["link"]}
              github={designPage[page]["github"]}
              picture={designPage[page]["picture"]}
              technologies={designPage[page]["technologies"]}
              overview={designPage[page]["overview"]}
            />
            <DesignNav />
            {designPage[page].empathy()}
            {designPage[page].define()}
            {designPage[page].ideate()}
            {designPage[page].prototype()}
            {designPage[page].test()}
          </>
        }
      />
    );
  }
}
let designPage = {
  //genius App
  1: {
    link: "https://genius-web-app.netlify.com/",
    github: "https://github.com/carloslazo/genius-web-app",
    picture: "genius2",
    technologies: "React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "Using the Genius.com API I built a responsive React application that renders a grid of lyric annotations for easy viewing.",


    color: ["#689DE4", "#5DA965", "#EF933F", "#E7613B", "#932A24"],
    e_p1:
      "This section will mainly be about my own assumptions and insights to solving the specific problem of creating a better way to read lyric annotations. The lack of user input forced me to put myself in other people's shoes and envision their needs. Yet, I acknowledge that I could be totally wrong to what the major population of users may actually want since these are my own biases.",
    e_p2:
      "The problem comes from personal experience based of frequently going to Genius.com a music lyric website. When I visit the website I frequently browsed through song annotations randomly since they were interesting to read, not really caring about the specific song or lyric fragment I choose. From this experience, I figured I could create a different way way to digest these annotations randomly other as opposed to clicking aimlessly.",

    empathy: function() {
      return (
        <ThinkingPage
          title="Empathy"
          id="empathy"
          color ="#689DE4"
          children={
            <div className="Thinking-page-grid-1">
              <DesignSquarePicture picture={genius2} color={this.color[0]} />
              <p>{this.e_p1}</p>
              <DesignWidePicture picture={e1w} color={this.color[0]} />
              <p>{this.e_p2}</p>
              <p>
                {this.e_p3} {this.e_p4}
              </p>
            </div>
          }
        />
      );
    },
    d_p1:
      "Problem Statement: End users want a easier way to digest lyric annotations",
    define: function() {
      return (
        <ThinkingPage
          title="Define"
          id="define"
          color ="#5AAA62"
          children={
            <div className="Thinking-page-grid-1">
              <DesignSquarePicture picture={grid1} color={this.color[1]} />
              <p>{this.d_p1}</p>
            </div>
          }
        />
      );
    },
    i_p1: "Examples of some of solutions I came up with:",
    ideate: function() {
      return (
        <ThinkingPage
          title="Ideate"
          id="ideate"
          color="#EF933F"
          children={
            <div className="Thinking-page-grid-1">
              <DesignWidePicture picture={wideDefine} color={this.color[3]} />
              <p>{this.i_p1}</p>
              <ul>
                <li>
                  {" "}
                  Annotations will be loaded based of categories: artists,
                  genres ect…
                </li>
                <li>
                  UI will be comprised of a grid as opposed to being based of
                  the lyric structure.
                </li>
                <li>
                  No clicking involved in seeing other annotations, instead will
                  scroll to see more.
                </li>
                <li>
                  Annotations will be distinguishable through a card based
                  component which will include cover photo, title, lyric
                  fragment and annotation.
                </li>
              </ul>
            </div>
          }
        />
      );
    },
    p_p1:
      "	My main design prototype was the card components that contained the annotation information. The first design I created contained all the information that I wanted present: title, artist, lyric fragment, and annotation. However, once I built out the grid it seemed rather plain and also it was hard to distinguish between other annotation cards.",
    p_p2:
      "My second card prototype makes sure that the annotations are more distinguishable by making the cover photo more apparent as well as making the body wider. It also separates the lyric fragment and the annotation by using different font sizes.",
    prototype: function() {
      return (
        <ThinkingPage
          title="Prototype"
          id="prototype"
          color="#E7613B"
          children={
            <div className="Thinking-page-grid-1">
              <DesignSquarePicture picture={squarePr} color={this.color[3]} />
              <p>{this.p_p1}</p>
              <DesignWidePicture picture={wideCard} color={this.color[3]} />
              <p>{this.p_p2}</p>
            </div>
          }
        />
      );
    },
    t_p1:
      "	As for testing I have gotten some user inputs such as: add regex filter for search bar, improve search algorithm for artist look up, add ability to save annotations. I still have features to add such as more search categories other than just artists and the ability to load more cards when scrolling.",
    test: function() {
      return (
        <ThinkingPage
          title="Test"
          id="test"
          color="#932A24"
          children={
            <div className="Thinking-page-grid-1">
              <DesignWidePicture picture={halfpage} color={this.color[4]} />
              <p>{this.t_p1}</p>
            </div>
          }
        />
      );
    }
  },
  2: {
    link: "https://carlos-lazo.netlify.com/",
    github: "https://github.com/carloslazo/portfollio",
    picture: "portfollio",
    technologies: "React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "Built a responsive portfolio using React JS and no css frameworks. The main focus on will be the projects pages which will break down my project process based on design thinking principles.",

    color: ["#689DE4", "#5DA965", "#EF933F", "#E7613B", "#932A24"],
    e_p1:
      "This section will mainly be about my own assumptions and insights to solving the specific problem of creating a better way to read lyric annotations. The lack of user input forced me to put myself in other people's shoes and envision their needs. Yet, I acknowledge that I could be totally wrong to what the major population of users may actually want since these are my own biases.",
    e_p2:
      "The problem comes from personal experience based of frequently going to Genius.com a music lyric website. When I visit the website I frequently browsed through song annotations randomly since they were interesting to read, not really caring about the specific song or lyric fragment I choose. From this experience, I figured I could create a different way way to digest these annotations randomly other as opposed to clicking aimlessly.",

    empathy: function() {
      return (
        <ThinkingPage
          title="Empathy"
          id="empathy"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignSquarePicture picture={genius2} color={this.color[0]} />
          //     <p>{this.e_p1}</p>
          //     <DesignWidePicture picture={e1w} color={this.color[0]} />
          //     <p>{this.e_p2}</p>
          //     <p>{this.e_p3} {this.e_p4}</p>
          //
          //   </div>
          // }
        />
      );
    },
    d_p1:
      "Problem Statement: End users want a easier way to digest lyric annotations",
    define: function() {
      return (
        <ThinkingPage
          title="Define"
          id="define"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignSquarePicture picture={grid1} color={this.color[1]} />
          //     <p style={{gridColumn: 2}}>{this.d_p1}</p>
          //   </div>
          // }
        />
      );
    },
    i_p1: "Examples of some of solutions I came up with:",
    ideate: function() {
      return (
        <ThinkingPage
          title="Ideate"
          id="ideate"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignWidePicture picture={wideDefine} color={this.color[3]} />
          //     <p>{this.i_p1}</p>
          //     <ul>
          //       <li > Annotations will be loaded based of categories: artists, genres ect…</li>
          //       <li>UI will be comprised of a grid as opposed to being based of the lyric structure.</li>
          //       <li>No clicking involved in seeing other annotations, instead will scroll to see more.</li>
          //       <li>Annotations will be distinguishable through a card based component which will include cover photo, title, lyric fragment and annotation.</li>
          //     </ul>
          //   </div>
          // }
        />
      );
    },
    p_p1:
      "	My main design prototype was the card components that contained the annotation information. The first design I created contained all the information that I wanted present: title, artist, lyric fragment, and annotation. However, once I built out the grid it seemed rather plain and also it was hard to distinguish between other annotation cards.",
    p_p2:
      "My second card prototype makes sure that the annotations are more distinguishable by making the cover photo more apparent as well as making the body wider. It also separates the lyric fragment and the annotation by using different font sizes.",
    prototype: function() {
      return (
        <ThinkingPage
          title="Prototype"
          id="prototype"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignSquarePicture picture={squarePr} color={this.color[3]} />
          //     <p>{this.p_p1}</p>
          //     <DesignWidePicture picture={wideCard} color={this.color[3]} />
          //     <p>{this.p_p2}</p>
          //   </div>
          // }
        />
      );
    },
    t_p1:
      "	As for testing I have gotten some user inputs such as: add regex filter for search bar, improve search algorithm for artist look up, add ability to save annotations. I still have features to add such as more search categories other than just artists and the ability to load more cards when scrolling.",
    test: function() {
      return (
        <ThinkingPage
          title="Test"
          id="test"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignWidePicture picture={halfpage} color={this.color[4]} />
          //     <p>{this.t_p1}</p>
          //   </div>
          // }
        />
      );
    }
  },
  3: {
    link: "https://recipe-front-app.herokuapp.com/",
    github: "https://github.com/carloslazo/recipe-fontend",
    picture: "checkmark",
    technologies: "Ruby, Ruby on Rails, Postgresql, React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "A React and Ruby on Rails web application that allows users to look up recipes from a list of ingredients. Users can then save recipes and text the saved recipes to themselves.",

    color: ["#689DE4", "#5DA965", "#EF933F", "#E7613B", "#932A24"],
    e_p1:
      "This section will mainly be about my own assumptions and insights to solving the specific problem of creating a better way to read lyric annotations. The lack of user input forced me to put myself in other people's shoes and envision their needs. Yet, I acknowledge that I could be totally wrong to what the major population of users may actually want since these are my own biases.",
    e_p2:
      "The problem comes from personal experience based of frequently going to Genius.com a music lyric website. When I visit the website I frequently browsed through song annotations randomly since they were interesting to read, not really caring about the specific song or lyric fragment I choose. From this experience, I figured I could create a different way way to digest these annotations randomly other as opposed to clicking aimlessly.",

    empathy: function() {
      return (
        <ThinkingPage
          title="Empathy"
          id="empathy"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignSquarePicture picture={genius2} color={this.color[0]} />
          //     <p>{this.e_p1}</p>
          //     <DesignWidePicture picture={e1w} color={this.color[0]} />
          //     <p>{this.e_p2}</p>
          //     <p>{this.e_p3} {this.e_p4}</p>
          //
          //   </div>
          // }
        />
      );
    },
    d_p1:
      "Problem Statement: End users want a easier way to digest lyric annotations",
    define: function() {
      return (
        <ThinkingPage
          title="Define"
          id="define"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignSquarePicture picture={grid1} color={this.color[1]} />
          //     <p style={{gridColumn: 2}}>{this.d_p1}</p>
          //   </div>
          // }
        />
      );
    },
    i_p1: "Examples of some of solutions I came up with:",
    ideate: function() {
      return (
        <ThinkingPage
          title="Ideate"
          id="ideate"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignWidePicture picture={wideDefine} color={this.color[3]} />
          //     <p>{this.i_p1}</p>
          //     <ul>
          //       <li > Annotations will be loaded based of categories: artists, genres ect…</li>
          //       <li>UI will be comprised of a grid as opposed to being based of the lyric structure.</li>
          //       <li>No clicking involved in seeing other annotations, instead will scroll to see more.</li>
          //       <li>Annotations will be distinguishable through a card based component which will include cover photo, title, lyric fragment and annotation.</li>
          //     </ul>
          //   </div>
          // }
        />
      );
    },
    p_p1:
      "	My main design prototype was the card components that contained the annotation information. The first design I created contained all the information that I wanted present: title, artist, lyric fragment, and annotation. However, once I built out the grid it seemed rather plain and also it was hard to distinguish between other annotation cards.",
    p_p2:
      "My second card prototype makes sure that the annotations are more distinguishable by making the cover photo more apparent as well as making the body wider. It also separates the lyric fragment and the annotation by using different font sizes.",
    prototype: function() {
      return (
        <ThinkingPage
          title="Prototype"
          id="prototype"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignSquarePicture picture={squarePr} color={this.color[3]} />
          //     <p>{this.p_p1}</p>
          //     <DesignWidePicture picture={wideCard} color={this.color[3]} />
          //     <p>{this.p_p2}</p>
          //   </div>
          // }
        />
      );
    },
    t_p1:
      "	As for testing I have gotten some user inputs such as: add regex filter for search bar, improve search algorithm for artist look up, add ability to save annotations. I still have features to add such as more search categories other than just artists and the ability to load more cards when scrolling.",
    test: function() {
      return (
        <ThinkingPage
          title="Test"
          id="test"
          // children={
          //   <div className="Thinking-page-grid-1">
          //     <DesignWidePicture picture={halfpage} color={this.color[4]} />
          //     <p>{this.t_p1}</p>
          //   </div>
          // }
        />
      );
    }
  }
};

export default Projects;

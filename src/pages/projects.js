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
              title={designPage[page]["title"]}
              link={designPage[page]["link"]}
              github={designPage[page]["github"]}
              picture={designPage[page]["picture"]}
              technologies={designPage[page]["technologies"]}
              overview={designPage[page]["overview"]}
            />
          </>
        }
      />
    );
  }
}
let designPage = {
  //genius App
  1: {
    title: "Genius Annotations",
    link: "https://genius-web-app.netlify.com/",
    github: "https://github.com/carloslazo/genius-web-app",
    picture: "genius2",
    technologies: "React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "Using the Genius.com API I built a responsive React application that renders a grid of lyric annotations for easy viewing."
    },
    2: {
      title: "Emoji-microinteraction",
      link: "https://emoji-microinteraction.netlify.com/",
      github: "https://github.com/carloslazo/genius-web-app",
      picture: "emoji-micro",
      technologies: "React, Javascript, HTML, CSS, Adobe XD",
      overview:
        "I recently been interested in UI microinteractions so I decided to make an experimental example of one using emojis. You click and hold an emoji, and it will transition through the other emojis; recording the emoji where you let go of the mouse. You could hyphocally use this on are you satisfied with our service forms or anything where you record some type of condition from one state to another. Personally, I believe this is awful UX since it's slow and you can easily not time a state change correctly giving you a incorrect entry. Also, not very accessible and inclusive for people who can't use mouses or trackpads. However, it's fun to experiment with new ways one can interact with a website and maybe eventually leading to a solution to the problems I mentioned. Only works on desktop since the mobile version of onmousedown event didn't work that well for this example."
      },
  3: {
    title: "Recipe App",
    link: "https://recipe-app-react.netlify.com/",
    github: "https://github.com/carloslazo/recipe-fontend",
    picture: "checkmark",
    technologies: "Ruby, Ruby on Rails, Postgresql, React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "A React and Ruby on Rails web application that allows users to look up recipes from a list of ingredients. Users can then save recipes and text the saved recipes to themselves."
  },
  4: {
    title: "Humaaans web app",
    link: "https://humaaans-web-app.netlify.com",
    github: "https://github.com/carloslazo/humaaans-character-create",
    picture: "humaaans",
    technologies: "React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "I made a simple React web app using Pablo Stanley's humaaans design library. The illustrations he created makes it really easy to mix and match pieces to create your own humaaan. In my web app you can change the head, body, bottom and skin color. But so much more can be done with this type of mix-&-match concept. Make sure to check out Pablo Stanley humaaans design library at: https://www.humaaans.com"
  }
};

export default Projects;

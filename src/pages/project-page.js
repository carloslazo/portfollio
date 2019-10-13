import React, { Component } from "react";
import Page from "../components/page.js";
import ProjectCard from "../components/project-card.js";

class ProjectPage extends Component {
  render() {
    return (
      <Page
        children={
          <div className="project-page-main">
            {designPage.map(x => {
              return (
                <ProjectCard
                  title={x.title}
                  link={x.link}
                  github={x.github}
                  picture={x.picture}
                  technologies={x.technologies}
                  overview={x.overview}
                  page={x.page}
                />
              );
            })}
          </div>
        }
      />
    );
  }
}
let designPage = [
  {
    page: 1,
    title: "Genius Annotations",
    link: "https://genius-web-app.netlify.com/",
    github: "https://github.com/carloslazo/genius-web-app",
    picture: "genius2",
    technologies: "React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "Using the Genius.com API I built a responsive React application that renders a grid of lyric annotations for easy viewing."
  },
  {
    page: 3,
    title: "Recipe App",
    link: "https://recipe-app-react.netlify.com/",
    github: "https://github.com/carloslazo/recipe-fontend",
    picture: "checkmark",
    technologies:
      "Ruby, Ruby on Rails, Postgresql, React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "A React and Ruby on Rails web application that allows users to look up recipes from a list of ingredients. Users can then save recipes and text the saved recipes to themselves."
  },
  {
    page: 4,
    title: "Humaaans web app",
    link: "https://humaaans-web-app.netlify.com",
    github: "https://github.com/carloslazo/recipe-fontend",
    picture: "checkmark",
    technologies:
      "Ruby, Ruby on Rails, Postgresql, React, Javascript, HTML, CSS, Adobe XD",
    overview:
      "A React and Ruby on Rails web application that allows users to look up recipes from a list of ingredients. Users can then save recipes and text the saved recipes to themselves."
  }
];

export default ProjectPage;

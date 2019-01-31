import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ReactGA from 'react-ga';
import About from "./pages/about.js";
import Blog from "./pages/blog.js";
import Projects from "./pages/projects.js";
import ProjectsPage from "./pages/project-page.js";
import NoMatch from "./pages/no-match.js";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/blog" component={Blog} />
            <Route exact path="/projects" component={ProjectsPage} />
            <Route path="/projects/:id" component={Projects} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={About} />
            <Route component={NoMatch}/>
        </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

function initializeReactGA() {
    ReactGA.initialize('UA-129159026-1');
    ReactGA.pageview('/homepage');
}

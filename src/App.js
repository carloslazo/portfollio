import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./pages/about.js";
import Blog from "./pages/blog.js";
import Projects from "./pages/projects.js";
import NoMatch from "./pages/no-match.js";


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/blog" component={Blog} />
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

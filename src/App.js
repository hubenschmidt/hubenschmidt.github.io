import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import projectData from "../src/projects.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "../src/pages/index.js";
import AdminContainer from "../src/components/AdminContainer";
import ProjectView from "../src/components/ProjectView";
// import { Link } from "react-router-dom";

//grid examples
const styles = theme => ({
  root: {
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "black"
  },

  footer: {
    // padding: theme.spacing(10),
    marginTop: "auto",
    color: "white",
    // backgroundColor: "white"
    border: "1px dotted green"
  },
  container: {
    // background: "black"
  },
  grid: {
    border: "1px dotted green",
    marginTop: "4px",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none"
  },
  grid2: {
    border: "1px dotted yellow",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none"
  },
  grid3: {
    border: "1px dotted red",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none"
  },
  paper: {
    textAlign: "center",
    backgroundColor: "black"
  },
  projTitle: {
    color: "green"
  },
  projDesc: {
    color: "white"
  }
});

class App extends Component {
  state = {
    projectData
  };

  render() {
    return (
      <div>
        <Router>
          {/* <AdminContainer /> */}
          <Index />
          <Route exact path="/" component={AdminContainer} />
          {/* <Route exact path= "/projects/:id" component={AdminContainer} /> */}
          <Route exact path="/projects/:id" component={ProjectView} />
          {/* <Route exact path="/projects/:id" component={AdminContainer} match={this.state} /> */}
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);

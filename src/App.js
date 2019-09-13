import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import Introduction from "../src/components/Introduction";
import Projects from "../src/components/Projects";
import { Project, ProjectItem } from "./components/Project";
import projectData from "../src/projects.json";
import { Link as RouterLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectView from "../src/components/ProjectView";
import Index from "../src/pages/index.js"

//grid examples

// const useStyles = makeStyles(theme => ({
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
    // padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    backgroundColor: "black"
  },
  projTitle: {
    color: "green"
  },
  projDesc: {
    color: "white"
  }
});

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class App extends Component {
  state = {
    projectData
  };

  render() {
    const { classes } = this.props;

    const AdminContainer = () => (
      <Fragment>
        <Index/>
        <Route path="/projects/:id" component={ProjectView} />
      </Fragment>
    )

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path= "/" component={AdminContainer} />
            <Route exact path= "/projects/:id" component={AdminContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withStyles(styles)(App);

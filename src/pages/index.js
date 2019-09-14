import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Introduction from "../components/Introduction";
import Projects from "../components/Projects";
import { Project, ProjectItem } from "../components/Project";
import projectData from "../projects.json";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProjectView from "../components/ProjectView";

//grid examples
const styles = () => ({
  root: {
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    background: "black"
  },

  footer: {
    marginTop: "auto",
    color: "white",
    border: "1px dotted green"
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
      {/* <Link color="inherit" to="https://material-ui.com">
        Your Website
      </Link>{" "} */}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class Index extends Component {
  state = {
    projectData
  };


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} className={classes.grid}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid2}>
              <Introduction spacing={0} />
              <Grid item xs={12} sm={12}>
                <Projects header="// projects--------------------------------------------------------------------------------------------------------------------------------------------">
                  {this.state.projectData.length ? (
                    <Project>
                      {this.state.projectData.map(proj => (
                        <ProjectItem key={proj.id}>
                          <Link
                            className={classes.projTitle}
                            to={"/projects/" + proj.id}
                          >
                            <Typography variant="body1">
                              {proj.title}
                            </Typography>
                          </Link>
                          <Typography
                            variant="body1"
                            className={classes.projDesc}
                          >
                            {proj.description}
                          </Typography>
                        </ProjectItem>
                      ))}
                    </Project>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                </Projects>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Router>
                <Route exact path="/projects/:id" component={ProjectView} />
              </Router>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.grid3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.grid3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.grid3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3} className={classes.grid3}>
              <Paper className={classes.paper}>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </Container>
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body1">footer</Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(Index);

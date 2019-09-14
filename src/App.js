import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Introduction from "../src/components/Introduction";
import Projects from "../src/components/Projects";
import { Project, ProjectItem } from "../src/components/Project";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/styles";
import projectData from "../src/projects.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProjectView from "../src/components/ProjectView";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles"

import "./App.css";

// const font = "'Anonymous Pro', monospace";
// const font = "Anonymous Pro, monospace";
const font = "Gayathri"

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
  
  },
//   overrides: {
//     MuiTypography: {
//       body1: {
//         fontFamily: font,
//       }
//     },
//     MuiCssBaseline: {
//       '@global': {
//         '@font-face': font,
//       },
//   }
// }
})

console.log(theme.typography.body1)

//grid examples
const styles = () => ({
  root: {
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundImage: "linear-gradient(#1d115d, #9F1159)",
    lineHeight: "4",
    fontSize: "2rem",
    fontWeight: "1000",
    letterSpacing: ".7px"
  },
  footer: {
    marginTop: "auto",
    color: "white",
    border: "1px dotted #4DFF00"
  },
  grid: {
    border: "1px dotted #4DFF00",
    marginTop: "4px",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1px dotted yellow",

    
  },
  grid2: {
    border: "1px dotted yellow",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
  },
  grid2a: {
    border: "1px dotted yellow",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
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
    backgroundColor: "#170457"
  },
  projTitle: {
    color: "#4DFF00"
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
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <Grid item xs={12} className={classes.grid}>
             
                </Grid>
          <Container maxWidth="lg">
            <Grid container>
              <Router>
      
                <Grid item xs={12} sm={6} className={classes.grid2}>
                  <Introduction spacing={0} />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid2a}>
                  <Projects header="// projects--------------------------------------------------------------------------------------------------------------------------------------------">
                    {this.state.projectData.length ? (
                      <Project>
                        {this.state.projectData.map(proj => (
                          <ProjectItem key={proj.id}>
                            <Link
                              className={classes.projTitle}
                              to={"/projects/" + proj.id}
                            >
                              <Typography>
                                {proj.title}
                              </Typography>
                            </Link>
                            <Typography
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
                <Route exact path="/projects/:id" component={ProjectView} />
              </Router>
            </Grid>
          </Container>
          <Grid item xs={12} sm={12} className={classes.grid2}>
 
          </Grid>
          <Grid item xs={12} sm={12} className={classes.grid2}>
      
          </Grid>
          <footer className={classes.footer}>
            <Container maxWidth="lg">
              <Typography>Contact Me</Typography>
            </Container>
          </footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

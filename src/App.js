import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Introduction from "../src/components/Introduction";
import Projects from "../src/components/Projects";
import { Project, ProjectItem } from "../src/components/Project";
import { Link as RouterLink } from "react-router-dom";
// import { Link } from "react-router-dom";
import Link from '@material-ui/core/Link';
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import projectData from "../src/projects.json";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ProjectView from "../src/components/ProjectView";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import { fontStyle } from "@material-ui/system";

// const font = "'Anonymous Pro', monospace";
// const font = "'Karla', sans serif";
// const font = "Gayathri";
// const font = "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif"
// const font = "'Open Sans', sans-serif";

const font = "'Inconsolata', monospace"

// const font = "'PT Serif', serif"

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    
  },
    overrides: {
      MuiTypography: {
        body1: {
          fontFamily: font,
          fontSize: '14px',
          // letterSpacing: "-.5px",
          fontWeight: '400'
         
        }
      },
      MuiCssBaseline: {
        '@global': {
          '@font-face': font,
        },
    }
  }
});

//grid examples
const styles = () => ({
  root: {
    flexGrow: 0,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    // backgroundImage: "linear-gradient(#1d115d, #9F1159)",
    backgroundImage: "linear-gradient(#1E3F3F, black)",
    lineHeight: "0",
    // fontSize: "2rem",
    // fontWeight: "1000",
    // letterSpacing: ".7px"
  },
  footer: {
    marginTop: "auto",
    color: "white",
    borderTop: "1px solid yellow",
    // marginBottom: "20px"
    paddingTop: "10px",
    paddingBottom: "40px"
  },
  footer_a: {
    // marginTop: "auto",
    color: "white",
    float: "left",
    marginLeft: "40px",
    marginTop: "-14px",
    backgroundColor: "black",
    fontSize: "1.9rem",
    textDecoration: 'none',
    '&:hover': {
      color: 'hotpink'
    }
    // border: "1px dotted #4DFF00"
  },
  footer_b: {
    // marginTop: "auto",
    color: "red",
    marginLeft: "10px",
    marginBottom: "-1px",
    backgroundColor: "yellow",
    fontSize: "1.2rem",
    textDecoration: 'none',
    '&:hover': {
      color: 'blue'
    }
    // border: "1px dotted #4DFF00"
  },
  footer_c: {
    // marginTop: "auto",
    color: "blue",
    marginLeft: "-20px",
    marginBottom: "-1px",
    backgroundColor: "green",
    fontSize: "1.6rem",
    textDecoration: 'none',
    '&:hover': {
      color: 'yellow'
    }
    // border: "1px dotted #4DFF00"
  },
  grid: {
    border: "1px dotted #4DFF00",
    marginTop: "4px",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "1px dotted yellow"
  },
  
  grid2: {
    border: "1px dotted yellow",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    paddingTop: "10px"
  },
  grid2a: {
    border: "4px groove #4DFF00",
    marginBottom: "2px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    marginTop: "20px"
  },
  grid2ab: {
    border: "2px groove #4DFF00",
    marginBottom: "2px",
  },
  grid2aa: {
    marginBottom: "20px",
  },
  grid3: {
    border: "1px dotted red",
    marginBottom: "4px",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none"
  },
  projTitle: {
    color: "yellow",
    textAlign: 'right',
  },
  projDesc: {
    color: "white",
    fontSize: ".7rem"
  },
  footerLink: {
    color: "yellow",
    '&:hover': {
      color: 'hotpink'
    }
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
          <Container maxWidth="lg">

             <Grid item xs={12} sm={12}  style={{paddingTop: '20px',float: 'right'}}>
            <Typography>
              <a
                href="https://github.com/hubenschmidt"
                target="_blank"
                className={classes.footer_a}
                style={{fontSize: '16px'}}
              >
                github
              </a>
            </Typography>
            <Typography>
              <a
                href="https://linkedin.com/in/williamhubenschmidt"
                target="_blank"
                className={classes.footer_b}
                style={{fontSize: '16px'}}
              >
                linkedin
              </a>
            </Typography>
            <Typography>
              <a
                href="/assets/William Hubenschmidt, Developer.pdf"
                target="_blank"
                className={classes.footer_c}
                style={{fontSize: '16px'}}
              >
                resume
              </a>
            </Typography>
          </Grid>
            
            <Grid container>
              
              <Router>
              <Grid item xs={12} sm={12} className={classes.grid2ab}></Grid>
                <Grid item xs={12} sm={6} className={classes.grid2}>
                  <Introduction spacing={0} />
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid2}>
                  <Projects header="// projects--------------------------------------------------------------------------------------------------------------------------------------------">
                    {this.state.projectData.length ? (
                      <Project>
                        {this.state.projectData.map(proj => (
                          <ProjectItem key={proj.id}>
                            <Link component={RouterLink}
                              className={classes.projTitle}
                              underline="hover"
                              to={"/projects/" + proj.id}
                            >
                              <Typography><strong>{proj.title}</strong></Typography>
                            </Link>
                          </ProjectItem>
                        ))}
                      </Project>
                    ) : (
                      <h3>No Results to Display</h3>
                    )}
                  </Projects>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.grid2aa}>
                <Route exact path="/projects/:id" component={ProjectView} />
                </Grid>
              </Router>
            </Grid>
          </Container>
          <Grid item xs={12} sm={12} className={classes.grid2a}></Grid>
          <Grid item xs={12} sm={12} className={classes.grid2a}>
            <Typography>
              <a
                href="https://github.com/hubenschmidt"
                target="_blank"
                className={classes.footer_a}
              >
                github
              </a>
            </Typography>
            <Typography>
              <a
                href="https://linkedin.com/in/williamhubenschmidt"
                target="_blank"
                className={classes.footer_b}
              >
                linkedin
              </a>
            </Typography>
            <Typography>
              <a
                href="/assets/William Hubenschmidt, Developer.pdf"
                target="_blank"
                className={classes.footer_c}
              >
                resume
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.grid2a}></Grid>
          <footer className={classes.footer}>
            <Container maxWidth="lg">
              <Typography style={{ marginLeft: "0px" }}>
                connect //{' '}
                <a
                className={classes.footerLink}
                href="mailto:whubenschmidt@gmail.com"
              >
                whubenschmidt@gmail.com
              </a>
               {' '} 2020 © WH
              </Typography>
            </Container>
          </footer>
        </div>
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);

import React, { Component, Fragment } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
// import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles"
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import CssBaseline from "@material-ui/core/CssBaseline";
import Introduction from "../src/components/Introduction";
import Projects from "../src/components/Projects";
import projectData from "../src/projects.json"

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
    backgroundColor: "white"
  },
  container: {
    // background: "black"
  },
  grid: {
    border: "1px dotted blue",
    marginBottom: "2px"
  },
  grid2: {
    border: "1px dotted yellow",
    marginBottom: "2px"
  },
  grid3: {
    border: "1px dotted red",
    marginBottom: "2px"
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    // color: theme.palette.text.secondary,
    backgroundColor: "black"
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
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Grid item xs={12} className={classes.grid}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid2}>
              <Introduction spacing={0} />
              <Grid item xs={12} sm={12} className>
                <Projects header="// projects--------------------------------------------------------------------------------------------------------------------------------------------" />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.grid2}>
              <Paper className={classes.paper}>window xs=12 sm=6</Paper>
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
            <Typography variant="body1">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </footer>
      </div>
    );
  }
}

export default withStyles(styles)(App);

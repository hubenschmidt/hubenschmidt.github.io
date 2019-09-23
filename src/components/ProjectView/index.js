import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import API from "../../utils/API";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  root: {},
  header: {
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "0",
    boxShadow: "1px 1px 1px 1.5px yellow",
    backgroundColor: "#009CFF",
    padding: "8px"
  },
  desc: {
    color: "yellow",
    fontSize: "14px",
    letterSpacing: "-0.002em",
    fontWeight: "0",
    boxShadow: "1px 1px 1px 1.5px yellow",
    backgroundColor: "#009CFF",
    padding: "20px"
  },
  link: {
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "0",
    boxShadow: "1px 1px 1px 1px yellow",
    padding: "8px",
    backgroundColor: "black",
    textAlign: "right"
  },
  img: {
    height: "50vh",
    boxShadow: "1px 1px 1px 1px yellow",
    marginTop: "8px"
  },
  hide: {
    visibility: "hidden"
  },
  link_a: {
    fontSize: "12px"
  },
  link_b: {
    marginLeft: "44px"
  }
});

class ProjectView extends Component {
  state = {
    project: {}
  };

  componentWillMount() {
    const projId = this.props.match.params.id;
    const results = API.getProjects(projId);
    this.setState({ project: results });
  }

  componentWillReceiveProps(nextProps) {
    const projId = nextProps.match.params.id;
    const results = API.getProjects(projId);
    this.setState({ project: results });
    // this.state.project = results;
  }

  render() {
    const { classes } = this.props;
    return this.state.project.map(el => (
      <Box component="div" className={classes.root}>
        <Box component="span" display="inline">
          <Typography className={classes.header}>
            <strong>{el.title}</strong>
          </Typography>
          <br />
          <Typography className={classes.desc}>
            <strong>{el.description}</strong>
          </Typography>
          <br />
        </Box>
        <Box component="span">
          <Typography className={classes.link}>
            <Link
              color="inherit"
              href={el.repo}
              target="_blank"
              className={classes.link_a}
            >
              <strong>github</strong>
            </Link>
            {' '}{' '} 
            <Link
              color="inherit"
              href={el.url}
              target="_blank"
              className={classes.link_a}
            >
              <strong>heroku</strong>
            </Link>
          </Typography>
        </Box>
        <Box
          component="div"
          style={{ backgroundImage: `url("${el.image}")` }}
          className={classes.img}
        >
          <Box className={classes.hide}>{el.image}</Box>
        </Box>
      </Box>
    ));
  }
}

export default withStyles(styles)(ProjectView);

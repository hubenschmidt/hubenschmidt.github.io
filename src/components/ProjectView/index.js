import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import API from "../../utils/API";
import Link from "@material-ui/core/Link";

// const useStyles = makeStyles({
const styles = theme => ({
  root: {},
  header: {
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "0",
    boxShadow: "-1px -2px 0px 2px yellow",
    marginLeft: "38px",
    backgroundColor: "#009CFF",
    marginLeft: "2px",
    padding: "8px"
  },
  desc: {
    color: "black",
    fontSize: "12px",
    fontWeight: "0",
    boxShadow: "-2px -2px 0px 3px yellow",
    marginLeft: "38px",
    backgroundColor: "#009CFF",
    marginLeft: "2px",
    padding: "8px",
  },
  link: {
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "0",
    boxShadow: "-3px -2px 0px 4px yellow",
    padding: "8px",
    backgroundColor: "black"
  },
  img: {
    height: "50vh",
    boxShadow: "-5px -2px 0px 6px yellow",
    marginTop: "8px"
    // objectFit: "contain"
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
        {/* <Box component="span" display="inline">
          <Typography className={classes.header} />
        </Box> */}
        <Box component="span" display="inline">
          <Typography className={classes.header}>
            <strong>{el.title}</strong>
          </Typography><br />
          <Typography className={classes.desc}>
            <strong>{el.description}</strong>
          </Typography><br />
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
            </Link>||
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

import React, { Component } from "react";
import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import API from "../../utils/API";
import Link from "@material-ui/core/Link";
import GridListTile from "@material-ui/core/GridListTile";

// const useStyles = makeStyles({
const styles = theme => ({
  root: {},
  header: {
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "0",
    boxShadow: "-3px -2px yellow",
    marginLeft: '38px',
    backgroundColor: "#009CFF",
    marginLeft: "2px"
    
  },
  desc: {
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "0",
    boxShadow: "-3px -2px #009CFF"
  },
  img: {
    height: "50vh",
    boxShadow: "-8px -8px yellow"
    // objectFit: "contain"
  },
  hide: {
    visibility: "hidden"
  },
  link_a: {
    marginLeft: "2px",
  },
  link_b:{
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
          <Typography className={classes.header} />
        </Box>
        <Box component="span" display="inline">
          <Typography className={classes.header}>
            <strong>{el.title}:</strong> {el.description}
          </Typography>
        </Box>
        <Box component="div" display="block">
          <Typography className={classes.desc}>
            <strong>links: </strong>
            <Link color="inherit" href={el.url} target="_blank" className={classes.link_a}>
              {el.url}
            </Link>
          </Typography>
          <Typography className={classes.desc}>
            <Link color="inherit" href={el.repo} target="_blank" className={classes.link_b}>
            {el.repo} 
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

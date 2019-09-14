import React, { Component } from "react";
import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import API from "../../utils/API";

// const useStyles = makeStyles({
const styles = theme => ({
  root: {
    backgroundColor: "#009CFF"
  },
  header: {
    color: "yellow",
    fontSize: "1rem",
    fontWeight: "1000",
    boxShadow: "-2px -2px"
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
    this.setState({ project: results })
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
            {el.description}
            {el.title}
          </Typography>
        </Box>
      </Box>
    ));
  }
}

export default withStyles(styles)(ProjectView);

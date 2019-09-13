import React, { Component } from "react";
import Box from "@material-ui/core/Box";
// import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";
import API from "../../utils/API";

// const useStyles = makeStyles({
const styles = theme => ({
  root: {},
  header: {
    color: "white"
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    projId: ownProps.match.params.id
  };
};

class ProjectView extends Component {
  // const project = this.props.match.params.id
  // console.log(project)
  // const project = props.projectData.find(proj => proj.id == ownProps.match.params.projId)

  componentDidMount() {
    const projId = this.props.match.params.id;
    console.log(projId);
    console.log(API.getProjects(projId))
  }

  render() {
    const { classes } = this.props;
    return (
      <Box component="div" className={classes.root}>
        <Typography variant="body1" className={classes.header}>
          <h3>test</h3>
          {/* <h2>{props.url}</h2> */}
        </Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(ProjectView);

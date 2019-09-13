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
  state = {
    project: {},
  }

  componentDidMount() {
    const projId = this.props.match.params.id;
    const results = API.getProjects(projId)
    this.setState( { project: results })
  }

  componentDidUpdate(){
    // console.log(this.state.project[0])
    const data = this.state.project[0]
    // console.log(data.url)
    // this.render()
  }

  render() {
    const { classes } = this.props;
    console.log(this.state.project[0])


    return (
      <Box component="div" className={classes.root}>
        <Typography variant="body1" className={classes.header}>
          <h3>test</h3>
          {/* <h2>{this.state}</h2> */}
        </Typography>
      </Box>
    );
  }
}

export default withStyles(styles)(ProjectView);

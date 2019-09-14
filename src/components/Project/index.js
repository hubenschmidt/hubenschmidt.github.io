import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

const useStyles = makeStyles({
  root: {
    marginBottom: "10px"
  },
  white: {
    color: "red"
  },

});

export function Project(props) {
  const classes = useStyles();
  return (
    <Box component="div">
      <List>{props.children}</List>
    </Box>
  );
}

export function ProjectItem(props) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Box component="span">
        {props.children}
      </Box>
    </Box>
  );
}

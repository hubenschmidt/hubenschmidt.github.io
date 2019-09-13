import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";

const useStyles = makeStyles({
  root: {
    marginBottom: "10px"
  },
  green: {
    color: "green"
  },
  white: {
    color: "white"
  }
});

export function Project(props) {
  const classes = useStyles();
  return (
    <Box component="div" className>
      <List>{props.children}</List>
    </Box>
  );
}

export function ProjectItem(props) {
  console.log(props.children)
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      {/* <Box component="span" className>
        <Typography variant="body1" className={classes.green}>
          {props.title}
        </Typography>
      </Box>
      <Box component="span" className>
        <Typography variant="body1" className={classes.white}>
          {props.description}
        </Typography>
      </Box> */}
      <Box component="span" className={classes.boxBody}>
        {props.children}
      </Box>
    </Box>
  );
}

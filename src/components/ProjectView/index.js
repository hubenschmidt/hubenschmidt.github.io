import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
  },
  header:{
    color: 'white'
  }
});

export default function ProjectView(props) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Typography variant="body1" className={classes.header}> 
        <h2>project view</h2>
      </Typography>
    </Box>
  );
}

import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
      overflow: 'hidden'
  },
  grayLine: {
    // color: "gray",
    whiteSpace: "nowrap"
  },
  green: {
    color: "#4DFF00"
  },
  gray: {
      color: "gray"
  },
  boxBody: {}
});

export default function Projects(props) {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
        <Box component="span" className={classes.grayLine}>
      <Typography className={classes.gray}> 
        {props.header}
      </Typography>
      </Box>
      <Typography className={classes.green}>
        {props.title}
      </Typography>
      <Box component="span" className={classes.boxBody}>
        {props.children}
      </Box>
    </Box>
  );
}

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
  gray: {
      color: "gray"
  },
  boxBody: {}
});

export default function Projects(props) {
    console.log(props)
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
        <Box component="span" className={classes.grayLine}>
      <Typography variant="body1" className={classes.gray}> 
        {props.header}
      </Typography>
      </Box>
      <Typography variant="body1" className={classes.green}>
        {props.title}
      </Typography>
      <Box component="span" className={classes.boxBody}>
        {props.children}
      </Box>
    </Box>
  );
}

import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    overflow: "hidden"
  },
  blue: {
    color: "blue"
  },
  yellow: {
    color: "yellow"
  },
  grayLine: {
    color: "gray",
    // overflow: 'hidden',
    // display: 'inline-block',
    whiteSpace: "nowrap"
  }
});

// export default Introduction = () => {
export default function Introduction() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Box component="span" className={classes.grayLine}>
        <Typography variant="body1">
          // introduction
          --------------------------------------------------------------------------------------------------------------------------------------------
        </Typography>
      </Box>
      <Box component="div">
        <Box component="span">
          <Typography variant="body1" className={classes.blue} display="inline">const </Typography>
          <Typography variant="body1" className={classes.yellow} display="inline">displayWork </Typography>
        </Box>
      </Box>
      // <span class="yellow">displayWork</span> = //{" "}
      <span className="yellow">() </span>
      // <span className="blue">=> </span>
      // {"{"}
      // <br />
      //{" "}
      <div className="string-indent">
        // <span className="fuschia">return </span>
        // <span className="orange">'programming and web development'</span>
        // <br />
        //{" "}
      </div>
    </Box>
  );
}

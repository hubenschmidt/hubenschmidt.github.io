import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    root: {
        overflow: 'hidden'

    },
    grayLine: {
        color: 'gray',
        // overflow: 'hidden',
        // display: 'inline-block',
        whiteSpace: 'nowrap'
    }
})

// export default Introduction = () => {
export default function Introduction() {
  const classes = useStyles();
  return (
  <Box className={classes.root}>
      <span className={classes.grayLine}>
          // introduction
          --------------------------------------------------------------------------------------------------------------------------------------------
      </span>
  </Box>
  )
};

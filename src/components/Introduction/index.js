import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    overflow: "hidden"
  },
  blue: {
    color: "#258BFF"
  },
  yellow: {
    color: "yellow"
  },
  white: {
    color: "white"
  },
  fuschia: {
    color: "red"
  },
  orange: {
    color: "orange"
  },
  grayLine: {
    color: "gray",
    whiteSpace: "nowrap"
  }
});

export default function Introduction() {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.root}>
      <Box component="span" className={classes.grayLine}>
        <Typography variant="body1">
          {"// introduction--------------------------------------------------------------------------------------------------------------------------------------------"}
        </Typography>
      </Box>
      <Box component="div">
        <Box component="span">
          <Typography variant="body1" className={classes.blue} display="inline">
            const{" "}
          </Typography>
          <Typography
            variant="body1"
            className={classes.yellow}
            display="inline"
          >
            williamRoy{" "}
          </Typography>
          <Typography
            variant="body1"
            className={classes.white}
            display="inline"
          >
            ={" "}
          </Typography>
          <Typography
            variant="body1"
            className={classes.yellow}
            display="inline"
          >
            ( ){" "}
          </Typography>

          <Typography variant="body1" className={classes.blue} display="inline">
            =>{" "}
          </Typography>

          <Typography
            variant="body1"
            className={classes.white}
            display="inline"
          >
            {"{"}{" "}
          </Typography>
          <Box component="div" marginLeft="20px">
            <Box component="div">
              <Typography
                variant="body1"
                className={classes.white}
                display="inline"
              >
                page ={" "}
              </Typography>
              <Typography
                variant="body1"
                className={classes.yellow}
                display="inline"
              >
                portfolio
              </Typography>
              <Typography
                variant="body1"
                className={classes.white}
                display="inline"
              >
                ;
              </Typography>
            </Box>
            <Box component="div">
              <Typography
                variant="body1"
                className={classes.fuschia}
                display="inline"
              >
                return{" "}
              </Typography>
              <Typography
                variant="body1"
                className={classes.orange}
                display="inline"
              >
                'Information and '{" "}
              </Typography>
              <Typography
                variant="body1"
                className={classes.white}
                display="inline"
              >
                +page+
              </Typography>
              <Typography
                variant="body1"
                className={classes.orange}
                display="inline"
              >
                ' on software developer in Brooklyn'{" "}
              </Typography>
            </Box>
          </Box>
          <Typography variant="body1" className={classes.white}>
            {"};"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

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
        <Typography>
          {"// introduction--------------------------------------------------------------------------------------------------------------------------------------------"}
        </Typography>
      </Box>
      <Box component="div">
        <Box component="span">
          <Typography className={classes.blue} display="inline">
            const{" "}
          </Typography>
          <Typography
        
            className={classes.yellow}
            display="inline"
          >
            williamRoy{" "}
          </Typography>
          <Typography
          
            className={classes.white}
            display="inline"
          >
            ={" "}
          </Typography>
          <Typography
          
            className={classes.yellow}
            display="inline"
          >
            ( ){" "}
          </Typography>

          <Typography className={classes.blue} display="inline">
            =>{" "}
          </Typography>

          <Typography
           
            className={classes.white}
            display="inline"
          >
            {"{"}{" "}
          </Typography>
          <Box component="div" marginLeft="20px">
            <Box component="div">
              <Typography
             
                className={classes.white}
                display="inline"
              >
                page ={" "}
              </Typography>
              <Typography
             
                className={classes.yellow}
                display="inline"
              >
                portfolio
              </Typography>
              <Typography
                className={classes.white}
                display="inline"
              >
                ;
              </Typography>
            </Box>
            <Box component="div">
              <Typography
                className={classes.fuschia}
                display="inline"
              >
                return{" "}
              </Typography>
              <Typography
                className={classes.orange}
                display="inline"
              >
                'Information and '{" "}
              </Typography>
              <Typography
                className={classes.white}
                display="inline"
              >
                +page+
              </Typography>
              <Typography
                className={classes.orange}
                display="inline"
              >
                ' on software developer in Brooklyn'{" "}
              </Typography>
            </Box>
          </Box>
          <Typography className={classes.white}>
            {"};"}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

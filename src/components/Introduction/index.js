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
    color: "yellow",
    fontWeight: "1000",
    fontSize: "1.2rem"
  },
  yellow2: {
    color: "yellow",
    fontWeight: "1000",
    // fontSize: "1.2rem"
  },
  white: {
    color: "white"
  },
  fuschia: {
    color: "#ca2c92",
    fontSize: "1rem"
  },
  orange: {
    color: "#ff8300",
    fontWeight: "1000",
    fontSize: "1rem"
// background: "#005DFF",
// textShadow: "1px 1px 0px #00e6e6, 0px 0px 0px #00bdbd "
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
            (hubenschmidt){" "}
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
             
                className={classes.yellow2}
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
          <Typography className={classes.white}>
            {/* feel free to explore →↑ or contact below ←↓ */}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
  },

  orange: {
    width: "60px",
    height: "60px",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const MobileHeader = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ height: "inherit" }}>
        <Toolbar>
          <Grid alignItems="center" direction="row" container>
          <Button className={classes.footerItemStyleMobile} color="inherit">
            <Typography color="textSecondary" variant="h5">
              Tasty Treats
            </Typography>
          </Button>
          </Grid>

          <Button className={classes.footerItemStyleMobile} edge="end" color="inherit">
            <Typography color="textSecondary" variant="h5">
              About
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default MobileHeader;

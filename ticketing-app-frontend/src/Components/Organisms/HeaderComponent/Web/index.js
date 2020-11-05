import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import deepOrange from "@material-ui/core/colors/deepOrange";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
  },

  ItemStyleDesktop: {
    marginLeft: theme.spacing(8),
    paddingBottom: "0",
  },

  orange: {
    width: "60px",
    height: "60px",
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

const WebHeader = () => {
  const classes = useStyles({});

  return (
    <div className={classes.root}>
      <AppBar position="sticky" style={{ height: "inherit" }}>
        <Toolbar>
          <Grid item>
            <Button disableRipple edge="start" color="inherit">
              <img alt="Error loading" style={{ width: "90px", height: "60px" }} src={require("../../../../assets/YouInLogo.png")} />
            </Button>
          </Grid>

          <Grid direction="row" alignItems="center" container>
            <Grid className={classes.ItemStyleDesktop} item>
              <Button edge="end" color="inherit">
                <Typography color="textSecondary" variant="h5">
                 Tasty Treats
                </Typography>
              </Button>
            </Grid>
          </Grid>
          <Button className={classes.ItemStyleDesktop} disableRipple edge="end" color="inherit">
            <Typography color="textSecondary" variant="h5">
              Support
            </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default WebHeader;

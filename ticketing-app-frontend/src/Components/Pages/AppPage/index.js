import React from "react";
import makeStyles from "@material-ui/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Fade from "@material-ui/core/Fade";
import { withRouter } from "react-router";

import Header from "../../Organisms/HeaderComponent/index";
import Footer from "../../Organisms/FooterComponent/index";
import FormComponent from "../../Organisms/FormComponent/index";
import TicketsHistory from "../../Organisms/TicketsHistoryComponent/index";

const useStyles = makeStyles((theme) => ({
  parentContainer: {
    flexGrow: 1,
    height: "var(--app-height)",
  },
  topContainer: {
    height: "10%",
    [theme.breakpoints.down("md")]: {
      height: "8%",
    },
  },
  mainContainer: {
    height: "80%",
    paddingTop: "8%",
    [theme.breakpoints.down("md")]: {
      height: "84%",
    },
    justifyContent: "center",
    alignItems: "center",
  },
  footerContainer: {
    height: "10%",
    [theme.breakpoints.down("md")]: {
      height: "8%",
    },
  },
}));

const App = () => {
  const classes = useStyles({});
  const tickets = [];

  for (let x = 1; x < 100; x++) {
    tickets.push({
      name: "bogdan",
      email: "bogdan@yahoo.com",
      message: `test Message jsjfkhfhsdljkfdsflhdsfdshfdskfdasfsad;fdasfg;adsfadsfjgsdfjgkjdfskfkdjsgsjdfgdsfkjgkafds;jafds;jfd;sakhj;dhjfldshfdslahdsahadflhads;hldfsl;dhsfdhl;aalsdf;hashd;f${x}`,
      dateCreated: new Date()
        .toISOString()
        .slice(0, 19)
        .replace(/-/g, "/")
        .replace("T", " "),
      subscribed: false,
      id: Math.floor(Math.random() * 10000) + 1000,
    });
  }

  const SubmitTicket = (values) => {
    const newTicket = {
      name: values.name,
      email: values.email,
      message: values.message,
      dateCreated: values.dateCreated,
      subscribed:values.subscribed,
      id: Math.floor(Math.random() * 10000) + 1000,
    };
    console.log(newTicket);
  };

  return (
    <Fade in={true}>
      <Grid container className={classes.parentContainer}>
        <Grid item xs={12} className={classes.topContainer}>
          <Header />
        </Grid>
        <Grid item xs={12} className={classes.mainContainer}>
          <Grid container direction="row">
            <Grid item xs={8}>
              <FormComponent submitForm={SubmitTicket} />
            </Grid>
            <Grid item xs={4}>
              <TicketsHistory tickets={tickets}></TicketsHistory>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className={classes.footerContainer}>
          <Footer />
        </Grid>
      </Grid>
    </Fade>
  );
};

export default withRouter(App);
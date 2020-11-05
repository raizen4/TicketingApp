import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import TicketDetails from "../../Molecules/TicketDetailsComponent/index";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
  },
  list: {
    width: "100%",
    maxHeight: 400,
    maxWidth: "100%",
    overflow: "auto",
  },
}));

const TicketsHistory = ({ tickets }) => {
  const classes = useStyles({});
  const [ticketDetailsOpen, setTicketDetailsStatus] = useState(false);
  const [currentlyPressedTicket, setCurrentlyPressedTicket] = useState(null);

  const AccessItemDetails = (item, e) => {
    setTicketDetailsStatus(true);
    setCurrentlyPressedTicket(item);
  };

  const HandleDetailsClose = () => {
    setTicketDetailsStatus(!ticketDetailsOpen);
    setCurrentlyPressedTicket(null);
  };

  return (
    <>
      {currentlyPressedTicket != null && (
        <TicketDetails
          ticket={currentlyPressedTicket}
          isOpen={ticketDetailsOpen}
          handleClose={HandleDetailsClose}
        />
      )}
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={12}>
          <Typography
            color="textPrimary"
            style={{ width: "100%" }}
            variant="h3"
          >
            Inquery History
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List dense={false} className={classes.list}>
            {tickets.map((ticket, index) => (
              <ListItem
                button
                onClick={(e) => AccessItemDetails(ticket, e)}
                key={index}
              >
                <Grid style={{ width: "100%" }}>
                  <Grid spacing={1} container direction="column">
                    <Grid item xs={12}>
                      Ticket Id: {ticket.id}
                    </Grid>
                    <Grid item xs={12}>
                      Name: {ticket.name}
                    </Grid>
                    <Grid item xs={12}>
                      Email: {ticket.email}
                    </Grid>
                    <Grid item xs={12}>
                      Date: {ticket.dateCreated}
                    </Grid>
                  </Grid>
                  <Divider style={{ width: "100%" }} />
                </Grid>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </>
  );
};
export default TicketsHistory;

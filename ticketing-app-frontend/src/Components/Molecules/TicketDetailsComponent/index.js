import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const TicketDetails = ({ isOpen, handleClose, ticket }) => {
  return (
    <>
      <Dialog fullWidth open={isOpen} onClose={handleClose}>
        <DialogTitle disableTypography={true}>
          <Typography color="textPrimary" variant="h4">
            Ticket id: {ticket.id}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container direction="column">
            <Grid item xs={12}>
              <Typography
                color="textPrimary"
                style={{ width: "100%" }}
                variant="h5"
              >
                Name :{ticket.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="textPrimary"
                style={{ width: "100%" }}
                variant="h5"
              >
                Created on: {ticket.dateCreated}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="textPrimary"
                style={{ width: "100%" }}
                variant="h5"
              >
                Email: {ticket.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                color="textPrimary"
                variant="h5"
                style={{ width: "100%" }}
              >
                Subscribed to newsletter:{" "}
                {ticket.subscribed ? <>Yes</> : <>No</>}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent>
          <Typography
            style={{ wordWrap: "break-word" }}
            color="textPrimary"
            variant="body1"
          >
            {ticket.message}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default TicketDetails;

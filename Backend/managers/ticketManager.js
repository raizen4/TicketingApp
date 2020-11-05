require("mongoose");
const Ticket = require("../DbSchemas/ticketSchema");

async function AddTicket(newTicketToAdd) {
  const newTicket = new Ticket(newTicketToAdd);
  try {
    const responseFromDb = await newTicket.save();
    if (responseFromDb != null) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
    return false;
  }
}

async function GetTickets() {
  try {
    const result = await Ticket.find().sort({DateCreated:-1});
    if (result != null) {
      return result;
    }
    return null;
  } catch (err) {
    return null;
  }
}

module.exports = {
  AddTicket,
  GetTickets,
};

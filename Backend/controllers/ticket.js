const NewRouter = require("restify-router").Router;
const ticketManager = require("../managers/ticketManager");

const router = new NewRouter();

router.post("/AddTicket", async (req, res) => {
  console.log(req.body);
  const ticket = {
    Name: req.body.newTicket.name,
    Email: req.body.newTicket.email,
    Subscribed: req.body.newTicket.subscribed,
    Id: req.body.newTicket.id,
    Message: req.body.newTicket.message,
    DateCreated:req.body.newTicket.dateCreated
  };

  try {
    const result = await ticketManager.AddTicket(ticket);
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});


router.get("/GetTickets", async (req, res) => {
  try {
    const result = await ticketManager.GetTickets();
    res.send(result);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;

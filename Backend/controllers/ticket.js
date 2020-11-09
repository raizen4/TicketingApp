const NewRouter = require("restify-router").Router;
const ticketManager = require("../managers/ticketManager");

const router = new NewRouter();

router.post("/AddTicket", async (req, res) => {
  const parsedJson = JSON.parse(req.body.newTicket);
  console.log(parsedJson);
  const ticket = {
    Name: parsedJson.name,
    Email: parsedJson.email,
    Subscribed: parsedJson.subscribed,
    Id: parsedJson.id,
    Message: parsedJson.message,
    DateCreated: parsedJson.dateCreated,
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

const NewRouter = require("restify-router").Router;
const ticketManager = require("../managers/ticketManager");

const router = new NewRouter();

router.post("/AddTicket", async (req, res) => {
  const ticket = {
    Name: req.body.DisplayName,
    Email: req.body.Email,
    Subscribed: req.body.Password,
    Id: req.body.Phone,
    Message: req.body.DeviceId,
  };

  try {
    const result = await ticketManager.AddTicket(ticket);
    res.send(result);
  } catch (err) {
    res.error();
  }
});


router.get("/GetTickets", async (req, res) => {
  try {
    const result = await ticketManager.GetTickets(userId);
    res.send(result);
  } catch (err) {
    res.error();
  }
});

module.exports = router;

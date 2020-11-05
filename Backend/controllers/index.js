const NewRouter = require('restify-router').Router;

const router = new NewRouter();

router.get('/', (req, res, next) => {
  res.json({
    message: 'Welcome to ticket-api',
    query: req.query,
  });
  next();
});

module.exports = router;

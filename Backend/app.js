const restify = require('restify');
const router = new (require('restify-router')).Router();
const cors = require('cors');
require('./DbSchemas/DbInit');
require('./DbSchemas/ticketSchema');

const port = 5000;
const server = restify.createServer({
  name: 'ticket-api',
  version: '1.0.0',
});

server.use(restify.plugins.bodyParser({ urlencoded: 'extended' }));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());
server.use(cors());


const ticketController = require('./controllers/ticket');
const homeController = require('./controllers/index');

router.add('/tickets', ticketController);
router.add('/', homeController);
router.applyRoutes(server);

server.on('after', restify.plugins.metrics({ server }, (err, metrics) => {
  console.trace(`${metrics.method} ${metrics.path} ${metrics.statusCode} ${metrics.latency} ms`);
}));

if (process.env.PORT != null) {
  server.listen(process.env.PORT, () => {
    console.log('%s listening at process.end.port %s', server.name, server.url);
  });
} else {
  server.listen(port, () => {
    console.log('%s listening at %s', server.name, server.url);
  });
}
server.on('uncaughtException', (req, res, route, err) => {
  console.log(err);
});

const corsMiddleware = require("restify-cors-middleware");
const restify = require("restify");
const router = new (require("restify-router").Router)();
require("./DbSchemas/DbInit");
require("./DbSchemas/ticketSchema");

const port = 5000;
const server = restify.createServer({
  name: "ticket-api",
  version: "1.0.0",
});

const cors = corsMiddleware({
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"],
});
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser({ urlencoded: "extended" }));
server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.gzipResponse());

const ticketController = require("./controllers/ticket");
const homeController = require("./controllers/index");

router.add("/tickets", ticketController);
router.add("/", homeController);
router.applyRoutes(server);

server.on(
  "after",
  restify.plugins.metrics({ server }, (err, metrics) => {
    console.trace(
      `${metrics.method} ${metrics.path} ${metrics.statusCode} ${metrics.latency} ms`
    );
  })
);

if (process.env.PORT != null) {
  server.listen(process.env.PORT, "0.0.0.0", () => {
    console.log("%s listening at process.end.port %s", server.name, server.url);
  });
} else {
  server.listen(port, "0.0.0.0", () => {
    console.log("%s listening at %s", server.name, server.url);
  });
}
server.on("uncaughtException", (req, res, route, err) => {
  console.log(err);
});

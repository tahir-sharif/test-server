const routes = (app) => {
  app.get("/", (req, res) => {
    res.json({
      message: "Welcome to express-js",
    });
  });

  app.get("/welcome-route", (req, res) => {
    res.json({
      message: "Welcome to Welcome Route",
    });
  });
};

module.exports = routes;

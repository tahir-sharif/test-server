const express = require("express");
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 8080;

routes(app);

const inititalizeApp = async () => {
  await new Promise((res) => setTimeout(res, 1500));

  app.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
  });
};

inititalizeApp().then(() => {
  console.log("server initialized");
});

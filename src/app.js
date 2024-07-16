const express = require("express");
const mongoose = require("mongoose");
const config = require("./lib/config/config");
const app = express()
const routes = require("./app/allRoutes/appRoutes")

app.use(express.json());
app.use("/", routes);
mongoose
  .connect(config.mongoDB)
  .then(() => {
    app.listen(config.port, () => {
      console.log(`Running on port ${config.port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
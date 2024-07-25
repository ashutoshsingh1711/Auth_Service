const express = require("express");
const { PORT } = require("./config/serverConfig");

const apiRoutes = require("../src/routes/index");
const bodyParser = require("body-parser");
const db = require("./models/index");
const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }
  });
};

prepareAndStartServer();

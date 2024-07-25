const express = require("express");
const { PORT } = require("./config/serverConfig");
const { User, Role } = require("./models/index");
const apiRoutes = require("../src/routes/index");
const bodyParser = require("body-parser");
const db = require("./models/index");
const app = express();

const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);
  app.listen(PORT, async () => {
    console.log(`Server started at ${PORT}`);
    // if (process.env.DB_SYNC) {
    //   db.sequelize.sync({ alter: true });
    // }
    const user = await User.findByPk(3);
    const adminRole = await Role.findOne({
      where: {
        name: "ADMIN",
      },
    });
    user.addRole(adminRole);
  });
};

prepareAndStartServer();

const express = require("express");

const UserController = require("../../controller/user-controller");
const { AuthRequestValidators } = require("../../middlewares/index");
const router = express.Router();

router.post(
  "/signup",
  AuthRequestValidators.validateUserAuth,
  UserController.create
);
router.post(
  "/signin",
  AuthRequestValidators.validateUserAuth,
  UserController.signin
);

router.get("/isAuthenticated", UserController.isAuthenticated);

module.exports = router;

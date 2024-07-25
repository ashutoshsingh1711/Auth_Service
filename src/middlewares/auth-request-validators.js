const validateUserAuth = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      success: false,
      data: [],
      message: "Something went wrong",
      err: "Email or password is missing in the requrest",
    });
  }
  next();
};

const validateIsAdminRequest = (req, res, next) => {
  if (!req.body.userId) {
    return res.status(400).json({
      success: false,
      data: [],
      err: "User id not given",
      message: "Something went wrong",
    });
  }
  next();
};

module.exports = {
  validateUserAuth,
  validateIsAdminRequest,
};

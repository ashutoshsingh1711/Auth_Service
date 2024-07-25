const { StatusCodes } = require("http-status-codes");
class AppErrors extends Error {
  constructor(
    name = "AppError",
    messgae = "Something went wrong",
    explaination = "Something went wrong",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super();
    this.name = name;
    this.message = messgae;
    this.explaination = explaination;
    this.statusCode = statusCode;
  }
}

module.exports = AppErrors;

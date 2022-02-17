class ApiError extends Error {
  constructor(msg, statusCode, msgWithField) {
    super(msg);
    this.statusCode = statusCode;
    this.msgeWithField = msgWithField;
  }
}

module.exports = ApiError;

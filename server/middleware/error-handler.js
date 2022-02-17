const Msg = require('../utils/message-constants');
const ApiError = require('../utils/api-error');

const errorHandler = (e, req, res, next) => {
  let error = {
    ...e,
  };

  console.log(`e is ${e}`);
  console.log(`error is ${error}`);

  // CastError
  if (e.name === 'CastError') {
    error = new ApiError(Msg.RESOURCE_NOT_FOUND, 404);
  }

  // E11000 == MongoError Duplicate Key Error
  if (e.code === 11000) {
    error = new ApiError(Msg.DUPLICATE_KEY_ERR, 400);
  }

  if (e.name === 'ValidationError') {
    const msg = Object.values(e.errors)
      .map((err) => ({
        field: err.path,
        message: err.message,
      }));
  }
  res.status(e.statusCode)
    .json({
      success: false,
      error: error.msgWithField ?? e.message ?? Msg.SERVER_ERR,
    });
};

module.exports = errorHandler;

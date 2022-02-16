class Msg {
  static RESOURCE_NOT_FOUND = "Resource not found";
  static DUPLICATE_KEY_ERR = "Duplicate field value entered";
  static SERVER_ERR = "Server error";
}

Object.freeze(Msg);

module.exports = Msg;

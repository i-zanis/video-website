class Msg {
  static RESOURCE_NOT_FOUND = "Resource not found";
  static DUPLICATE_KEY_ERR = "Duplicate field value entered";
  static SERVER_ERR = "Server error";
  static NO_CATEGORY_ERR = "No category with the id of ";
  static TITLE_LENGTH_ERR = 'Title requires at least 3' +
    ' characters';
  static TITLE_REQ_ERR = 'Title is required';
  static DESCRIPTION_LENGTH_ERR = 'Description requires at least 3' +
    ' characters';
static DESCRIPTION_REQ_ERR = 'Description is required';

}

Object.freeze(Msg);

module.exports = Msg;

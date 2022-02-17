const Category = require('../models/category');
const ApiError = require('../utils/api-error');
const Msg = require('../utils/message-constants');

/** ****************************************************************************
 * Get All Categories
 * Route: GET /api/v1/categories
 * Access: Private
 **************************************************************************** */
exports.getCategories = async (req, res, next) => {
  const categories = await Category.find();
  res.status(200)
    .json({
      success: true,
      data: categories,
    });
};

/** ****************************************************************************
 * Get Category
 * Route: GET api/v1/categories/{id}
 * Access Private
 **************************************************************************** */

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return next(new ApiError(`${Msg.NO_CATEGORY_ERR}${req.params.id}`, 404));
    }
  } catch (e) {
  }
};

/** ****************************************************************************
 * Update Category
 * Route: PUT /api/v1/categories
 * Access: Private
 **************************************************************************** */
exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      uniqueValidators: true,
      context: 'query',
    });
    if (!category) {
      return next(new ApiError(`${Msg.NO_CATEGORY_ERR}${req.params.id}`, 404));
    }
    res.status(200)
      .json({
        success: true,
        data: category,
      });
  } catch (e) {
    next(e);
  }
};

/** ****************************************************************************
 * Create Category
 * Route: POST /api/v1/categories
 * Access: Private
 **************************************************************************** */
exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(200)
      .json({
        success: true,
        data: category,
      });
  } catch (e) {
    res.status(400)
      .json({
        success: false,
        error: e.message,
      });
  }
};

/** ****************************************************************************
 * Delete Category
 * Route: DELETE /api/v1/{id}
 * Access: Private
 **************************************************************************** */
exports.deleteCategory = async (req, res, next) => {
  try {
    const category = Category.find(req.body);
    if (!category) {
      return next(new ApiError(`${Msg.NO_CATEGORY_ERR}${req.params.id}`, 404));
    }
    await category.remove();
    res.status(200)
      .json({
        success: true,
        category,
      });
  } catch (e) {
  }
};

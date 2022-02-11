const Category = require('../models/category');

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
 * Get Selected Category
 * Route: GET api/v1/categories/{id}
 * Access Private
 **************************************************************************** */
exports.getCategory = async (req, res, next) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(400)
      .json({
        success: true,
        error: `Category with id of ${req.param.id} not found`,
      });
  }
  return res.status(200)
    .json({
      success: true,
      data: category,
    });
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
      res.status(400)
        .json({
          success: true,
          error: `No category with id of ${req.param.id}`,
        });
    }
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
  const category = Category.find(req.body);
  if (!category) {
    res.status(400)
      .json({
        success: false,
        error: `No category with id of ${req.params.id}`,
      });
  }
  await category.remove();
  res.status(200)
    .json({
      success: true,
      category,
    });
};

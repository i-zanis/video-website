const Category = require('../models/category');

// Admin rights to create categories
// desc Get categories
// route Get /api/v1/categories

exports.getCategories = async (req, res, next) => {
  const categories = await Category.find();
  res.status(200)
    .json({
      success: true,
      data: categories,
    });
};

// Get selected category
// Route: Get api/v1/categories/{id}
// Access: Private
exports.getCategory = async (req, res, next) => {
  const category = await Category.findById(req.param.id);
  if (!category) {
    return res.status(400)
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
 * Route: Put /api/v1/categories
 * Access: Private
 ***************************************************************************** */
exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      uniqueValidators: true,
      context: 'query',
    });
    if (!category) {
      return res.status(400)
        .json({
          success: true,
          error: `No category with id of ${req.param.id}`,
        });
    }
    return res.status(200)
      .json({
        success: true,
        data: category,
      });
  } catch (e) {
    return res.status(400)
      .json({
        success: false,
        error: e.message,
      });
  }
};

exports.createCategories = async (req, res, next) => {
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

// Create Category
// Route: /categories
// Access Admin|Private

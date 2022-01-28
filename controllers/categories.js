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
      kaka: 'testa',
      fksfk: ['24', 15],
    });
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

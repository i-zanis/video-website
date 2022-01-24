const category = ('../models/category');

// Admin rights to create categories
// desc Get categories
// route Get /api/v1/categories

exports.getCategories = async (req, res, next) => {
  const categories = await category.find();
  res.status(200)
    .json({
      success: true,
      data: categories,
    });
};

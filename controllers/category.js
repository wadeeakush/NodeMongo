const Category = require('../models/category');

// Create category
async function createCategory(req, res) {
  try {
    const { name, description } = req.body;
    const category = new Category({ name, description });
    await category.save();
    res.status(201).json({ category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get all categories
async function getAllCategories(req, res) {
  try {
    const categories = await Category.find();
    res.json({ categories });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get category by ID
async function getCategoryById(req, res) {
  try {
    const category = await Category.findById({ _id: req.query.categoryId });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update category by ID
async function updateCategory(req, res) {
  try {
    const { name, description, categoryId } = req.body;
    const category = await Category.findByIdAndUpdate(
      { _id: categoryId },
      { name, description },
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ category });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete category by ID
async function deleteCategory(req, res) {
  try {
    const category = await Category.findByIdAndDelete({_id: req.body.categoryId});
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createCategory, getAllCategories, getCategoryById, updateCategory, deleteCategory };

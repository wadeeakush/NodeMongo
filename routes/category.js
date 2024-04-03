const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes requiring authentication
router.post('/createCategory', authMiddleware, categoryController.createCategory);
router.get('/getAllCategories', authMiddleware, categoryController.getAllCategories);
router.get('/getCategoryById', authMiddleware, categoryController.getCategoryById);
router.patch('/updateCategory', authMiddleware, categoryController.updateCategory);
router.delete('/deleteCategory', authMiddleware, categoryController.deleteCategory);

module.exports = router;

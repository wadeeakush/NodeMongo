const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');
const authMiddleware = require('../middleware/authMiddleware');

// Protected routes requiring authentication
router.post('/createTask', authMiddleware, taskController.createTask);
router.get('/getAllTasks', authMiddleware, taskController.getAllTasks);
router.get('/getTaskById', authMiddleware, taskController.getTaskById);
router.patch('/updateTask', authMiddleware, taskController.updateTask);
router.delete('/deleteTask', authMiddleware, taskController.deleteTask);

module.exports = router;

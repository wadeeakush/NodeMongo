const Task = require('../models/task');

// Create task
async function createTask(req, res) {
    try {
      const { title, description, status, dueDate, category } = req.body;
      const task = new Task({ title, description, status, dueDate, createdBy: req.user._id, category });
      await task.save();
      res.status(201).json({ task });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

// Get all tasks

async function getAllTasks(req, res) {
  try {
    const userId = req.user._id;
    const { status, dueDate } = req.query;
    const filter = { createdBy: userId };
    if (status) filter.status = status;
    if (dueDate) filter.dueDate = new Date(dueDate);

    const tasks = await Task.find(filter);
    return tasks.length ? res.json({ tasks }) : res.status(404).json({ message: "Tasks Not Found" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get task by ID
async function getTaskById(req, res) {
  try {
    const task = await Task.findById({ createdBy: req.user._id, _id: req.query.taskId }).populate('category');
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update task by ID
async function updateTask(req, res) {
  try {
    const { title, description, status, dueDate, category } = req.body;
    const task = await Task.findByIdAndUpdate(
     { createdBy: req.user._id, _id: req.body.taskId },
      { title, description, status, dueDate, category },
      { new: true }
    ).populate('category');
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ task });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Delete task by ID
async function deleteTask(req, res) {
  try {
    const task = await Task.findByIdAndDelete({ createdBy:req.user._id, _id: req.query.taskId});
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { createTask, getAllTasks, getTaskById, updateTask, deleteTask };

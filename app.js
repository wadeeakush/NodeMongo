// app.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const taskRoutes = require('./routes/task');
const categoryRoutes = require('./routes/category');
const config = require('config');

const app = express();

mongoose.connect(config.dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err.message));
mongoose.set({debug:true})
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/categories', categoryRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

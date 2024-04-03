Wadeea AbuKoosh
209482140

# Task Manager API

This is a Node.js API for a task manager application. It provides endpoints to manage users, tasks, and categories.

## Dependencies

- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>

1. Navigate to the project directory:
cd task-manager-api

2. Install dependencies:
npm install

3. start the server
npm start
 
## API Endpoints

## Users

### Create a new user
- Method: POST
- URL: http://localhost:3000/api/users/signup
- Request body: { "username": "<username>", "email": "<email>", "password": "<password>" }

### Login user and generate JWT token
- Method: POST
- URL: http://localhost:3000/api/users/login
- Request body: { "email": "<email>", "password": "<password>" }

### Get all users
- Method: GET
- URL: http://localhost:3000/api/users/getAllUsers

### Update user details
- Method: PATCH
- URL: http://localhost:3000/api/users/updateUser
- Request body: { "userId": "<user-id>", "username": "<new-username>", "email": "<new-email>", "password": "<new-password>" }

### Delete a user
- Method: DELETE
- URL: http://localhost:3000/api/users/deleteUser
- Request body: { "userId": "<user-id>" }

## Tasks
 For task pass jwt token in authentication using bearer token 

### Create a new task
- Method: POST
- URL: http://localhost:3000/api/tasks/createTask
- Request body: { "title": "<title>", "description": "<description>", "status": "<status>", "dueDate": "<due-date>", "category": "<category-id>" }

### Get all tasks
- Method: GET
- URL: http://localhost:3000/api/tasks/getAllTasks
- Query parameters: status, dueDate

### Get task by ID
- Method: GET
- URL: http://localhost:3000/api/tasks/getTaskById
- Query parameter: taskId

### Update task by ID
- Method: PATCH
- URL: http://localhost:3000/api/tasks/updateTask
- Request body: { "taskId": "<task-id>", "title": "<new-title>", "description": "<new-description>", "status": "<new-status>", "dueDate": "<new-due-date>", "category": "<new-category-id>" }

### Delete task by ID
- Method: DELETE
- URL: http://localhost:3000/api/tasks/deleteTask
- Query parameter: taskId

## Categories
 For it pass jwt token in authentication using bearer token 
### Create a new category
- Method: POST
- URL: http://localhost:3000/api/categories/createCategory
- Request body: { "name": "<name>", "description": "<description>" }

### Get all categories
- Method: GET
- URL: http://localhost:3000/api/categories/getAllCategories

### Get category by ID
- Method: GET
- URL: http://localhost:3000/api/categories/getCategoryById
- Query parameter: categoryId

### Update category by ID
- Method: PATCH
- URL: http://localhost:3000/api/categories/updateCategory
- Request body: { "categoryId": "<category-id>", "name": "<new-name>", "description": "<new-description>" }

### Delete category by ID
- Method: DELETE
- URL: http://localhost:3000/api/categories/deleteCategory
- Query parameter: categoryId

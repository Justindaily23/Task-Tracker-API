# Task Tracker API

A RESTful API for managing tasks, built with Node.js, Express, MongoDB, and JWT authentication. Designed to handle CRUD operations for tasks with user authentication and role-based access control.

## Features
- **Task Management**: Create, read, update, delete tasks with fields like title, completed, inProgress, dueDate, priority, and description.
- **Authentication**: Register and login users with JWT tokens.
- **Authorization**: Role-based access (user vs. admin—e.g., only admins can delete tasks).
- **Database**: MongoDB Atlas for persistent storage.
- **Development**: Nodemon for auto-restarts during dev.

## Tech Stack
- **Node.js**: Runtime environment.
- **Express**: Web framework for routing.
- **MongoDB/Mongoose**: Database and ODM.
- **JWT**: Token-based authentication.
- **bcryptjs**: Password hashing.

## Setup
1. **Clone the Repo**:
   ```bash
   git clone https://github.com/Justindaily23/Task-Tracker-API.git
   cd Task-Tracker-API

2.  **Install Dependencies**:
   - npm install

3. **Set Environment Variables**:
   - Create a .env file in the root:
   PORT=3000
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/tasks?retryWrites=true&w=majority
   JWT_SECRET=your-secret-here

4. **Run the App**:
   - Development
      npm run dev

   - Production
     npm start

## API Endpoints
- **Base URL**: http://localhost:3000

## Auth:
- POST /auth/register - Register a user (needs username, password).

- POST /auth/login - Login, returns JWT token.

## Tasks (requires Authorization: Bearer <token> header):
- GET /tasks - List all tasks.

- POST /tasks - Create a task (e.g., { "title": "Test", "priority": "high" }).

- PUT /tasks/:id - Update a task by ID.

- DELETE /tasks/:id - Delete a task (admin only).


## Example Usage
1. **Register**
 - curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username":"user1","password":"pass123"}'

2. **Login (copy token)**:

 - curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username":"user1","password":"pass123"}'

3. **Create Task**:

   curl -X POST http://localhost:3000/tasks -H "Authorization: Bearer <token>" -H "Content-Type: application/json" -d '{"title":"Finish README","dueDate":"2025-04-15"}'




## Project Structure
**models/** - Mongoose schemas (User, Task).

**services/** - Business logic (auth, tasks).

**routes/** - API endpoints.

**middleware/** - JWT and role checks.

**app.js** - Server setup.

## Notes
**Built as a junior-level portfolio project in April 2025.**

**Tested with Postman—fully functional.**

## License
**MIT—free to use or adapt!**


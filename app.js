const express = require("express");
const {
  getTasks,
  createTasks,
  getTasksById,
  appDateTask,
  deleteTaskById,
} = require("./controllers/tasksControllers");

const app = express();
app.use(express.json());

app.get("/tasks", getTasks);
app.post("/tasks", createTasks);
app.get("/tasks/:id", getTasksById);
app.patch("/tasks/:id", appDateTask);
app.delete("/tasks/:id", deleteTaskById);
module.exports = app;

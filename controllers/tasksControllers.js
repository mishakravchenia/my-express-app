const { v4: uuidv4 } = require("uuid");

const tasks = [
  {
    id: "eb36b4ad-1154-417e-b10a-dd3422d5aed3",
    title: "Read a book",
    description: "Spend at least 30 minutes reading a book of your choice.",
    dueDate: "2024-09-20",
  },
  {
    id: "d6eefe0e-58c6-4102-9ecd-7cc308ef0e6b",
    title: "Complete homework",
    description: "Finish the math and science homework assigned today.",
    dueDate: "2024-09-18",
  },
];

module.exports.getTasks = (req, res) => {
  res.status(200).send(tasks);
};
module.exports.createTasks = (req, res) => {
  const { body } = req;

  const newTask = { ...body, id: uuidv4(), isDone: false };

  tasks.push(newTask);
  res.status(201).send(newTask);
};

module.exports.getTasksById = (req, res) => {
  const { id } = req.params;
  const foundTasks = tasks.find((k) => k.id === id);
  if (!foundTasks) {
    return res.status(404).send("Not found Tasks");
  }
  res.status(200).send(foundTasks);
};
module.exports.appDateTask = (req, res) => {
  const {
    body,
    params: { id },
  } = req;
  const foundTaskIndex = tasks.findIndex((k) => k.id === id);
  if (foundTaskIndex === -1) {
    return res.status(404).send("Not found Tasks");
  }
  tasks[foundTaskIndex] = { ...tasks[foundTaskIndex], ...body };
  res.status(200).send(tasks[foundTaskIndex]);
};
module.exports.deleteTaskById = (req, res) => {
  const { id } = req.params;

  const foundTasksIndex = tasks.findIndex((k) => k.id === id);
  if (foundTasksIndex === -1) {
    return res.status(404).send("Task Not Found");
  }

  tasks.splice(foundTasksIndex, 1);

  res.status(204).end();
};

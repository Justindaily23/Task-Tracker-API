import Task from '../models/taskModel.js';

export const getAllTasks = async () => {
  const tasks = await Task.find();
  return tasks;
};

export const createTask = async (taskData) => {
  const { title, completed, inProgress, dueDate, priority, description } = taskData;
  if (!title || typeof title !== 'string') {
    throw new Error('Title is required and must be a string');
  }
  const task = new Task({
    title,
    completed: completed ?? false,
    inProgress: inProgress ?? false,
    dueDate: dueDate ? new Date(dueDate) : null,
    priority: priority ?? 'medium',
    description: description ?? ''
  });
  await task.save();
  return task;
};

export const updateTask = async (id, taskData) => {
  const task = await Task.findById(id);
  if (!task) {
    throw new Error('Task not found');
  }
  const { title, completed, inProgress, dueDate, priority, description } = taskData;
  if (title !== undefined) task.title = title;
  if (completed !== undefined) task.completed = completed;
  if (inProgress !== undefined) task.inProgress = inProgress;
  if (dueDate !== undefined) task.dueDate = dueDate ? new Date(dueDate) : null;
  if (priority !== undefined) task.priority = priority;
  if (description !== undefined) task.description = description;

  await task.save();
  return task;
};

export const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  if (!task) {
    throw new Error('Task not found');
  }
  return task;
};
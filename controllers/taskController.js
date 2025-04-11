import { getAllTasks, createTask, updateTask, deleteTask } from '../services/taskService.js';


export const getTasks = async (req, res) => {
    try {
        const tasks = await getAllTasks();
        res.status(200).json(tasks);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

export const createATask = async (req,res) => {
    try {
        const task = await createTask(req.body);
        res.status(201).json(task);
      } catch (error) {
        res.status(error.message.includes('Title') ? 400 : 500).json({ message: error.message });
      }
};


export const updateATask = async (req, res) => {
    try {
        const task = await updateTask(req.params.id, req.body);
        res.status(200).json(task);
      } catch (error) {
        res.status(error.message.includes('not found') ? 404 : 400).json({ message: error.message });
      }
};

export const deleteATask = async (req, res) => {
    try {
        await deleteTask(req.params.id);
        res.status(204).send(); // 204 No Content—standard for DELETE success
      } catch (error) {
        res.status(error.message.includes('not found') ? 404 : 500).json({ message: error.message });
      }
};
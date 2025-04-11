import express from 'express';
import { getTasks, createATask, updateATask, deleteATask } from '../controllers/taskController.js';
import { authMiddleware } from '../middleware/auth.js';

const router = express.Router();


// get all tasks
router.get('/', authMiddleware, getTasks);

router.post('/create', authMiddleware, createATask);

router.put('/update/:id', authMiddleware, updateATask);

router.delete('/delete/:id', authMiddleware, deleteATask);

export default router;
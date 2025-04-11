import express from 'express';
import { userRegister, userLogin } from '../controllers/authController.js';
import {authMiddleware} from '../middleware/auth.js'

const router = express.Router();

router.post('/register', userRegister);

router.post('/login', authMiddleware, userLogin);

export default router;
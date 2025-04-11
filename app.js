import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import taskRoutes from './routes/taskRoutes.js';
import authRoutes from './routes/authRoutes.js'


// Load environment variables from .env
dotenv.config();

connectDB();

const app = express();
app.use(express.json());
app.use('/task', taskRoutes)
app.use('/user', authRoutes)


app.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'Basic Server Task Completed' });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});


const PORT = process.env.PORT || 5000;

// Start server with error handling
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Handle uncaught errors (basic safety net)
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
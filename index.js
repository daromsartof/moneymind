import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js';
import categoryRoutes from './src/routes/categoryRoutes.js';
import transactionRoutes from './src/routes/transactionRoutes.js';
import budgetRoutes from './src/routes/budgetRoutes.js';
import dotenv from 'dotenv';
import { protect } from './src/middleware/authMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(bodyParser.json());

app.use('/api', userRoutes);
app.use('/api', protect, categoryRoutes);
app.use('/api', protect, transactionRoutes);
app.use('/api', protect, budgetRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


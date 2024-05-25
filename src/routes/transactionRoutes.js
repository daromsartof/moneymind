import express from 'express';
import TransactionController from '../controllers/TransactionController.js';

const router = express.Router();

router.post('/transactions', TransactionController.createTransaction);
router.get('/transactions', TransactionController.getTransactions);

export default router;

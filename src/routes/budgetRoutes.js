import express from 'express';
import BudgetController from '../controllers/BudgetController.js';

const router = express.Router();

router.post('/budgets', BudgetController.createBudget);
router.get('/budgets', BudgetController.getBudgets);

export default router;

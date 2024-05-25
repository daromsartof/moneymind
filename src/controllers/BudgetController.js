import Budget from '../models/Budget.js';

class BudgetController {
    static async createBudget(req, res) {
        try {
            const { userId } = req
            const { categoryId, amount, startDate, endDate } = req.body;
            const budget = new Budget({ userId, categoryId, amount, startDate, endDate });
            await budget.save();
            res.status(201).json(budget);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getBudgets(req, res) {
        try {
            const { userId } = req
            const budgets = await Budget.find({
                userId
            });
            res.status(200).json(budgets);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default BudgetController;

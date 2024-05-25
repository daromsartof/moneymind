import Transaction from '../models/Transaction.js';

class TransactionController {
    static async createTransaction(req, res) {
        try {
            const { userId } = req
            const { categoryId, amount, type, description, transactionDate } = req.body;
            const transaction = new Transaction({ userId, categoryId, amount, type, description, transactionDate });
            await transaction.save();
            res.status(201).json(transaction);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    static async getTransactions(req, res) {
        try {
            const { userId } = req
            const transactions = await Transaction.find({
                userId
            });
            res.status(200).json(transactions);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default TransactionController;

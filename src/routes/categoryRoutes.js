import express from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = express.Router();

router.post('/categories', CategoryController.createCategory);
router.get('/categories', CategoryController.getCategories);

export default router;

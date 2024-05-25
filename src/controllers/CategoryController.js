import Category from '../models/Category.js';

class CategoryController {
  static async createCategory(req, res) {
    try {
      const { name } = req.body;
      const { userId } = req
      const category = new Category({ userId, name });
      await category.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getCategories(req, res) {
    try {
     const { userId } = req
      const categories = await Category.find({
        userId
      });
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

export default CategoryController;

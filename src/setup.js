import fs from 'fs';
import path from 'path';

const structure = {
  'src/config': ['db.js'],
  'src/controllers': ['UserController.js', 'TransactionController.js', 'CategoryController.js', 'BudgetController.js'],
  'src/models': ['User.js', 'Transaction.js', 'Category.js', 'Budget.js'],
  'src/routes': ['userRoutes.js', 'transactionRoutes.js', 'categoryRoutes.js', 'budgetRoutes.js'],
  'src/middleware': ['authMiddleware.js'],
  '': ['.env', 'index.js']
};


const createStructure = (base, structure) => {
  Object.entries(structure).forEach(([folder, files]) => {
    const folderPath = path.join(base, folder);
    
    if (folder) {
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Created folder: ${folderPath}`);
      }
    }

    files.forEach(file => {
      const filePath = path.join(folderPath, file);
      if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, '');
        console.log(`Created file: ${filePath}`);
      }
    });
  });
};


createStructure('.', structure);

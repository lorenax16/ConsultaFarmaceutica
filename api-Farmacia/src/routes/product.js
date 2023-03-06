const express = require('express');

const productsController = require('../controllers/products/ProductController');
// const validar = require('../middleware/validations');
const ProductRouter = express.Router();

// ProductRouter.post('/', productsController.create);
ProductRouter.get('/', productsController.getAll);
ProductRouter.get('/:id', productsController.getById);
ProductRouter.delete('/:id', productsController.deleteById);

module.exports = { ProductRouter };

const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/', productController.addProduct);
router.get('/', productController.getProducts);

module.exports = router;

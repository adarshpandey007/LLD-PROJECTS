const productService = require('../services/productService');

exports.addProduct = (req, res) => {
  try {
    const { name, price, quantity,pincodes } = req.body;
    const product = productService.addProduct(name, price,quantity,pincodes);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getProducts = (req, res) => {
  res.json(productService.getProducts());
};

const Product = require('../models/productModel');

class ProductService {
  constructor() {
    this.products = [];
  }

  addProduct(name, price, quantity,pincodes) {
    let pId = `Product-${Date.now()}`;
    while(this.products[pId]){
        pId = `Product-${Date.now()}`;
    };
    const product = new Product(pId, name, price, quantity,pincodes);
    this.products.push(product);
    return product;
  }

  getProducts() {
    return this.products;
  }

  isDeliverable(productId, pincode) {
    const product = this.products.find((product) => product.id === productId);
    if (!product) {
      throw new Error('Product not found');
    }
    console.log("deliverable pinocdes",product.deliverablePincodes,pincode);
    return product.deliverablePincodes.includes(pincode);
  }
}

module.exports = new ProductService();

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.addUser);
router.get('/', userController.getUsers);
router.get('/:userId/orders',userController.getUserOrders);

module.exports = router;

const userService = require('../services/userServices');

exports.addUser = (req, res) => {
  try {
    const { name, mobile, pincode } = req.body;
    const user = userService.addUser(name,mobile, pincode );
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsers = (req, res) => {
  res.json(userService.getUsers());
};

exports.getUserOrders = async(req ,res) =>{
    try {
        const { userId } = req.params;
        const orders = await userService.getOrdersForUser(userId);
        res.status(200).json(orders);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

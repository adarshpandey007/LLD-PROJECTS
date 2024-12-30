const userService = require('../services/userService');

exports.createUser = (req, res) => {
    try {
        const { name } = req.body;
        const id = `user-${Date.now()}`;
        const user = userService.createUser(id, name);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getUser = (req , res)=>{
    try {
        const user = userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
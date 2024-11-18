const commentService = require("../services/commentService");

const createComment = (req, res) => {
  const { commentOn, parentId, userId, body } = req.body;

  try {
    const id = `comment-${Date.now()}`;
    const comment = commentService.createComment(id, parentId, userId, body,commentOn);
    res.status(201).json({ message: "Comment created", comment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createComment };

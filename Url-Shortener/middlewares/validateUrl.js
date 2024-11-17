const validUrl = require("valid-url");

const validateUrl = (req, res, next) => {
  const { longUrl } = req.body;

  if (!longUrl || !validUrl.isUri(longUrl)) {
    return res.status(400).json({ error: "Invalid URL" });
  }

  next();
};

module.exports = validateUrl;

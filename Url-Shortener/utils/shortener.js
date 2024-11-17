const crypto = require("crypto");

const generateShortUrl = () => {
  return crypto.randomBytes(4).toString("hex");
};

module.exports = {
  generateShortUrl,
};

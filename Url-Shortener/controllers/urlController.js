const urlService = require("../services/urlService");

const shortenUrl = (req, res) => {
  const { longUrl } = req.body;
  try {
    const shortUrl = urlService.createShortUrl(longUrl);
    res.status(201).json({ message: "URL shortened successfully", shortUrl });
  } catch (error) {
    res.status(500).json({ error: "Error creating short URL" });
  }
};

const redirectUrl = (req, res) => {
  const { shortUrl } = req.params;
  try {
    const longUrl = urlService.getLongUrl(shortUrl);
    console.log("longurl",longUrl);
    if (longUrl) {
      res.redirect(longUrl);
    } else {
      res.status(404).json({ error: "Short URL not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error redirecting URL" });
  }
};

const getAllUrls = (req, res) => {
  try {
    const urls = urlService.getAllUrls();
    res.status(200).json({ urls });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving URLs" });
  }
};

module.exports = {
  shortenUrl,
  redirectUrl,
  getAllUrls,
};

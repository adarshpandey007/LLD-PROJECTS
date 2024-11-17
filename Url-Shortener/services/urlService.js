const Url = require("../models/urlModel");
const shortener = require("../utils/shortener");

// In-memory storage
const urls = {};

const createShortUrl = (longUrl) => {
  // Check if URL already exists
  const existingUrl = Object.values(urls).find(url => url.longUrl === longUrl);
  if (existingUrl) {
    return existingUrl.shortUrl; // Return existing short URL if found
  } 
  let shortUrl = shortener.generateShortUrl();
  // Duplicacy check
  while(urls[shortUrl]){
    shortUrl = shortener.generateShortUrl();
  }
  // Calculate expiry date (1 year from now)
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);  // Add 1 year

  urls[shortUrl] = new Url(longUrl, shortUrl,expiryDate);
  return shortUrl;
};

const getLongUrl = (shortUrl) => {
  const urlEntry = urls[shortUrl];
  return urlEntry ? urlEntry.longUrl : null;
};

const getAllUrls = () => {
  return Object.values(urls);
};

module.exports = {
  createShortUrl,
  getLongUrl,
  getAllUrls,
};

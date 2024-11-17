class Url {
    constructor(longUrl, shortUrl,expiryDate) {
      this.longUrl = longUrl;
      this.shortUrl = shortUrl;
      this.expiryDate = expiryDate;
      this.createdAt = new Date();
    }

    // Check if the URL has expired
    isExpired() {
        return new Date() > this.expiryDate;  // Compare current date with expiry date
    }
}
  
  module.exports = Url;
  
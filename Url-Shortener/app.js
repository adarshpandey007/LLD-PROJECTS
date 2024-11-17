const express = require("express");
const bodyParser = require("body-parser");
const urlRoutes = require("./routes/urlRoutes");

const app = express();
app.use(bodyParser.json());

// Use routes
app.use("/api/urls", urlRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

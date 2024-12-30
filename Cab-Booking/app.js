const express = require("express");
const bodyParser = require("body-parser");

const bookingRoutes = require("./routes/bookingRoutes");
const cabRoutes = require("./routes/cabRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(bodyParser.json());

// Routes 
app.use("/users",userRoutes);
app.use("/booking",bookingRoutes);
app.use("/cab",cabRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
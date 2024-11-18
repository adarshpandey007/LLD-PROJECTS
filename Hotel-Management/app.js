const express = require("express");
const bodyParser = require("body-parser");

const roomRoutes = require("./routes/roomRoutes");
const userRoutes = require("./routes/userRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api/rooms", roomRoutes);
app.use("/api/users", userRoutes);
app.use("/api/bookings", bookingRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

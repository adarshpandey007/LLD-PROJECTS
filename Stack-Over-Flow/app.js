const express = require("express");
const questionRoutes = require("./routes/questionRoutes");
const answerRoutes = require("./routes/answerRoutes");
const commentRoutes = require("./routes/commentRoutes");
const errorMiddleware = require("./middleware/errorMiddleware.js");

const app = express();
app.use(express.json());

// Routes
app.use("/questions", questionRoutes);
app.use("/answers", answerRoutes);
app.use("/comments", commentRoutes);

// Middleware
app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

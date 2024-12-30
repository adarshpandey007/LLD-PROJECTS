const express = require('express');
const userRoutes = require('./routes/userRoutes');
const pollRoutes = require('./routes/poolRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.use('/users', userRoutes);
app.use('/polls', pollRoutes);

app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

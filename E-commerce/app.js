const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

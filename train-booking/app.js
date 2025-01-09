const express = require('express');

routes = require('./routes/trainRoute');

const app = express();
app.use(express.json());

app.use('/train',routes);
app.use('/booking',routes);

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`server running`);
});
const express = require('express');
const app = express();


//ROUTE
const floristsRoute = require('./routes/florists');

app.use('/florists', floristsRoute);


app.listen(3000);
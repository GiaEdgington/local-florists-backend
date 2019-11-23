const express = require('express');
const app = express();
const cors = require('cors');


//Middleware
app.use(cors());


//ROUTE
const floristsRoute = require('./localflorists');
app.use('/localflorists', floristsRoute);

app.listen(process.env.PORT);
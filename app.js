const express = require('express');
const app = express();
const cors = require('cors');


//Middleware
app.use(cors());
app.use('/florists', floristsRoute);

//ROUTE
const floristsRoute = require('./florists');


app.listen(3000);
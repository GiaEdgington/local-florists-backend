const express = require('express');
const app = express();
const cors = require('cors');


//Middleware
app.use(cors());


//ROUTE
const floristsRoute = require('./florists');
app.use('/florists', floristsRoute);

app.listen(3000);
const express = require('express');
const app = express();


//ROUTE
const floristsRoute = require('./florists');

app.use('/florists', floristsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
});


app.listen(3000);
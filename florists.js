'use strict';

const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
require('dotenv/config');

const apiKey= process.env.API_KEY;

const client = yelp.client(apiKey);

router.get('/', (req, res) => {

    //SUBMIT SEARCH REQUEST
    const searchRequest =  {
        term: 'Florists',
        location: req.query.location,
    };

    client.search(searchRequest).then(response => {
        const responseJson = JSON.stringify(response.jsonBody.businesses, null, 4);
        res.send(responseJson);
    }).catch(e => {
        res.send(e);
    });

});


module.exports = router;
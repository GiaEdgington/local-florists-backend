'use strict';

const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion'); //Yelp Fusion API reference

require('dotenv/config');

const apiKey= process.env.API_KEY;
const client = yelp.client(apiKey);

router.get('/', (req, res) => {

    let searchRequest = {}

    //Determine if request is location or coordinate based search and set parameters.

    if (req.query.location) {
        searchRequest = {
            term: 'Florists',
            location: req.query.location,
        };
    }
    else if (req.query.latitude && req.query.longitude) {
        searchRequest = {
            term: 'Florists',
            latitude: req.query.latitude,
            longitude: req.query.longitude
        };
    }

    //Submit Yelp API search with request.

    client.search(searchRequest).then(response => {
        const responseJson = JSON.stringify(response.jsonBody.businesses, null, 4);
        res.send(responseJson);
    }).catch(e => {
        res.send(e);
    });

});

module.exports = router;
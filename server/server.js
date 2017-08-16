const express = require('express'),
    app = express();

const axios = require('axios');

const url = 'http://digitalhomecanada.com/blog/wp-json/wp/v2';

var port = process.env.port || 8080;

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log(`Express Server is Running on ${port}`);
    console.log("Press Ctrl-C to quit");
});

app.get('/posts', function (req, res) {
    const promise = axios.get(url + '/posts')
        promise.then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.json(error);
        });
});

app.get('/categories', function (req, res) {
    const promise = axios.get(url + '/categories')
        promise.then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.json(error);
        });
});





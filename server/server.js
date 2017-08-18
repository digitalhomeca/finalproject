const express = require('express'),
    app = express();


const axios = require('axios');

const url = 'http://digitalhomecanada.com/blog/wp-json/wp/v2';

var port = process.env.port || 8080;

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next()
})

app.use(express.static(__dirname + '/public'));

app.listen(port, function () {
    console.log(`Express Server is Running on ${port}`);
    console.log("Press Ctrl-C to quit");
});

app.get('/posts', function (req, res) {
    const promise = axios.get(url + '/posts/?_embed')
        promise.then((result) => {
            res.json(result.data);
            console.log('received request');
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





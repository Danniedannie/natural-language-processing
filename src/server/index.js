const dotenv = require('dotenv')
dotenv.config()
var aylien = require('aylien_textapi')
var path = require('path')
var textapi = new aylien({
    application_id: 'a49e5674',
    application_key: 'd80d3cdb1e1d27f79cb58c448878207'
});

const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function(req, res) {
    console.log('tsst')
    textapi.sentiment({ 'text': 'John is a very good football player!' }, function(error, response) {
        console.log('test')
        if (error === null) {
            console.log(response);
        } else {
            console.log(error);
        }
    });
    res.sendFile('dist/test.html')
})


// designates what port the app will listen to for incoming requests
app.listen(3000, function() {
    console.log('Example app listening on port 3030!')
})

//app.get('/test', function(req, res) {
//res.send(mockAPIResponse)
//})
/* 
app.get('/test', function(req, res) {
    res.send(testing)
}) */
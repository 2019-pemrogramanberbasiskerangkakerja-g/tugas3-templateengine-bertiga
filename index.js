var express = require('express');
var app = express();
var Sqrl = require('squirrelly')

app.set('view engine', 'squirrelly')

app.get('/', function (req, res) {
    res.render('index', {
        head: 'Title',
        name: 'Darke'
    })
})

var server = app.listen(3000, function () { // This starts the server
    console.log("Server engine squirelly listening to request on port 3000");
});

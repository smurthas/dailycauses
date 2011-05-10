var express = require('express'),
    connect = require('connect'),
    fs = require('fs'),
    http = require('http'),
    url = require('url'),
    sys = require('sys');

var db = require('./db.js');


var app = express.createServer(
        express.static(__dirname + '/web'),
        connect.bodyParser(),
        connect.cookieParser(),
        connect.session({secret : "dc"})
    );


app.post('/newcause', function(req, res) {
    var title = req.body.title;
    var desc = req.body.desc;
    var hood = req.body.hood;
    var numPeople = req.body.numPeople;
    var dollars = req.body.dollars;
    //commit to DB
    db.putInDB(title, desc, hood, numPeople, dollars, function() { 
        res.writeHead(200);
        res.end();
    });
});


app.post


app.listen(8080);
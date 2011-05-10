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


app.post('/causes/:hood', function(req, res) {
    var hood = req.params.hood;
    
    var title = req.body.title;
    var desc = req.body.desc;
    var numPeople = req.body.numPeople;
    var dollars = req.body.dollars;
    //commit to DB
    console.log(req.body);
    db.putInDB(title, desc, hood, numPeople, dollars, function() { 
        res.writeHead(200);
        res.end();
    });
});


app.get('/causesbyhood/:hood', function(req, res) {
    var hood = req.params.hood;
    db.getCausesByHood(hood, function(err, causes) {
        res.writeHead(200, {'content-type':'application/json'});
        res.end(JSON.stringify(causes));
    });
});

app.post('/signup', function(req, res) {
    var addr = req.body.email;
    db.signup(email, hood, function(err) {
        res.writeHead(200);
        res.end();
    });
})

app.post('contribute', function(req, res) {
    var _id = res.body._id, 
        name = res.body.name, 
        email = res.body.email, 
        hours = res.body.hours, 
        dollars = res.body.dollars;
    db.contribute(_id, name, email, hours, dollars, function(err) {
        res.writeHead(200);
        res.end();
    })
});


db.openCollection(function() {
    app.listen(process.env.VMC_APP_PORT || 8080);
});

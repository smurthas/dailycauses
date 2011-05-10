var express = require('express'),
    connect = require('connect'),
    fs = require('fs'),
    http = require('http'),
    url = require('url'),
    sys = require('sys');


var app = express.createServer(
        express.static(__dirname + '/web'),
        connect.bodyParser(),
        connect.cookieParser(),
        connect.session({secret : "dc"})
    );





app.listen(8080);
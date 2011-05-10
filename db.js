require.paths.push(__dirname + '/node-mongodb-native/lib');
var mongodb = require('mongodb'),
    BSON = require('mongodb').BSONNative;

var config = {dataStoreHost:'localhost'};

var dbName = 'db';
var collectionName = 'causes';
var server = new mongodb.Server(config.dataStoreHost, mongodb.Connection.DEFAULT_PORT, {});
var db = new mongodb.Db(dbName, server, {native_parser:true});
var causes, users;

var ObjectID = db.bson_serializer.ObjectID;


exports.openCollections = function(callback) {
    db.open(function(err, openedDB) {
        if(err) {
            console.error('error opening database', err);
            db.close();
            return;
        } else if(!db) {
            db.log('could not open database', db);
            return;
        }
        openedDB.collection('causes', function(err, collection) {
            causes = collection;
            openedDB.collection('users', function(err, collection) {
                users = collection;
                callback();
            });
        });
    });
}

exports.putInDB = function(title, desc, hood, numPeople, dollars, callback) {
    causes.save({title:title, desc:desc, hood:hood, numPeople:numPeople, dollars:dollars, date:new Date().getTime()}, callback);
}


exports.signup = function(addr, hood, callback) {
    users.save({email:addr, hood:hood}, callback);
}

exports.getUsersForHood = function(hood, callback) {
    users.find({hood:hood}, callback);
}

exports.getByHood = function(hood, callback) {
    coll.find({hood:hood, date: {$gt:(new Date().getTime() - 24*60*60*1000)}}, callback);
}
require.paths.push(__dirname + '/node-mongodb-native/lib');
var mongodb = require('mongodb'),
    BSON = require('mongodb').BSONNative;

var config = {dataStoreHost:'localhost'};

var dbName = 'db';
var collectionName = 'causes';
var server = new mongodb.Server(config.dataStoreHost, mongodb.Connection.DEFAULT_PORT, {});
var db = new mongodb.Db(dbName, server, {native_parser:true});
var coll;

var ObjectID = db.bson_serializer.ObjectID;


exports.openCollection = function(callback) {
    db.open(function(err, openedDB) {
        if(err) {
            console.error('error opening database', err);
            db.close();
            return;
        } else if(!db) {
            db.log('could not open database', db);
            return;
        }
        openedDB.collection(collectionName, function(err, collection) {
            coll = collection;
            callback(err, collection);
        });
    });
}

exports.putInDB = function(title, desc, hood, numPeople, dollars, callback) {
    
}


exports.getByHood = function(hood, callback) {
    
}

const MongoClient = require('mongodb').MongoClient;

let state = {
    db: null
};

exports.connect = (url, done) => {
    if (state.db) {
        return done();
    }
    
    MongoClient.connect(url, {useNewUrlParser: true}, (err, db) => {
        if (err) {
            return done(err);
        }
        state.db = db;
        return done();
    });
};

exports.get = ( ) => {
    return state.db;
};
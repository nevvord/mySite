const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const db = require('./db');

'use strict';

const   url = 'mongodb://localhost:27017',
        dbName = 'myApi';

let Server = express();

Server.use(bodyParser.json());
Server.use(bodyParser.urlencoded({extended: true}));

Server.get('/', (req, res) => {
    res.send('Hello API');
});



Server.get('/works', (req, res) => {
    db.get().collection('works').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});

Server.get('/work/:id', (req, res) => {
    db.get().collection('works').findOne({_id: ObjectID(req.params.id)}, (err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});

Server.post('/work', (req, res) => {
    var work = {
        title: req.body.title,
        miniWork: req.body.miniWork
    };

    db.get().collection('works').insert(work, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
});

Server.put('/work/:id', (req, res) => {
    db.get().collection('works').updateOne(
        { _id: new ObjectID(req.params.id) },
        { $set: { title: req.body.title, miniWork: req.body.miniWork } },
        { upsert: true },
        (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.send(200);
        }
    );
});

Server.delete('/work/:id', (req, res) => {
    db.get().collection('works').deleteOne(
        { _id: new ObjectID(req.params.id) },
        (err, result) => {
            if (err) {
                console.log(err);
                return res.sendStatus(500);
            }
            res.sendStatus(200);
        }
    );
});

db.connect(url, (err, client) => {
    if (err) {
        return console.log(err);
    }
    
    Server.listen(3012, () => {
        console.log("API STARTED"); 
        console.log(db.get());
       // console.log(client);
        
    });
});



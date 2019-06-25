const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var cors = require('cors');



'use strict';

const   url = 'mongodb://localhost:27017',
        dbName = 'myApi';

let Server = express(), db;

Server.use(bodyParser.json());
Server.use(bodyParser.urlencoded({extended: true}));
Server.use(cors({
    credentials: true,
    origin: true,
    optionsSuccessStatus: 200
}));
  
Server.use(bodyParser.json({limit: '100mb',  parameterLimit:100000}));

Server.get('/', (req, res) => {
    res.send('Hello API');
});



Server.get('/works', (req, res) => {
    db.collection('works').find().toArray((err, docs) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    });
});

Server.get('/work/:id', (req, res) => {
    db.collection('works').findOne({_id: ObjectID(req.params.id)}, (err, docs) => {
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

    db.collection('works').insert(work, (err, result) => {
        if (err) {
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(result);
    });
});

Server.put('/work/:id', (req, res) => {
    db.collection('works').updateOne(
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

Server.put('/work/mini/:id/:index', (req, res) => {
    console.log(req.params.id);
    console.log(req.params.index);
    let index = `miniWork.${req.params.index}.checked`;
    console.log(index);
    
    
    
    db.collection('works').updateOne(
        { _id: new ObjectID(req.params.id) },
        { $set: { [index]: req.body.checked } },
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
    db.collection('works').deleteOne(
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

MongoClient.connect(url, {useNewUrlParser: true}, (err, client) => {
    if (err) {
        return console.log(err);
    }
    db = client.db(dbName);
    
    
    Server.listen(30012, () => {
        console.log("API STARTED"); 
       // console.log(client);
        
    });
});



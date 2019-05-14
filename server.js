const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db.js');
const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({extended: true}));

MongoClient.connect(db.url, (err, client) => {
    if (err) return console.log(err);
    const db = client.db('db1');
    require('./app/routes')(app, db);
    app.listen(port, () => {
        console.log('we\'re live at port ' + port)
    })
});
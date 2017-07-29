var express = require('express');
var app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err)=>{
    if (err) {
        console.log('Could not connect to db');
    } else {
        console.log('Connected to ' + config.db);
    }
} );

app.use(express.static(__dirname + '/client/dist/'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/dist/index.html'));
});

app.listen(8080, () => {
    console.log('listening on port 8080')
});
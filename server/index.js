const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const massive = require('massive');
require('dotenv').config();
const {CONNECTION_STRING, PORT} = process.env;
const app = express();
app.use(bodyParser.json());
var port = PORT || 4000;
massive(CONNECTION_STRING).then(connection=>{
    app.set('db',connection);
    }).catch(err => {
        console.log(err);
    });
    app.post('/api/inventory',controller.create);
    app.get('/api/inventory', controller.getAll);
    
    
    
    
app.listen(port, () => {
    console.log(`listening on port ${port}`);
    })
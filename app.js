'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.disable('x-powered-by');

// cargar rutas
var note_routes = require('./routes/note');

// body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Configurar CORS

// rutas
app.use('/api', note_routes);

module.exports = app;
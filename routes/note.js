'use strict'

var express = require('express');
var NoteController = require('../controllers/note');

var api = express.Router();

api.get('/pruebas', NoteController.pruebas);
api.post('/note', NoteController.saveNote);
api.get('/notes', NoteController.getNotes);
api.get('/note/:id', NoteController.getNote);
api.put('/note/:id', NoteController.updateNote);
api.delete('/note/:id', NoteController.deleteNote);

module.exports = api;
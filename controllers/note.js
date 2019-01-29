'use strict'

var Note = require('../models/note');

function pruebas (req, res) {
    res.status(200).send({
        message: 'Esta ruta es de prueba'
    });
}

function saveNote(req, res) {
    var note = new Note();

    var params = req.body;

    if(params.title){
        note.title = params.title;
        note.content = params.content;
        note.private = params.private;

        note.save((err, noteStored) => {
            if(err){
                res.status(500).send({
                    message: 'Server error'
                })
            } else {
                if (noteStored) {
                    res.status(200).send({
                        message: noteStored
                    })
                } else {
                    res.status(200).send({
                        message: 'Note not added'
                    })
                }
            }
        });
    } else {
        res.status(200).send({
            message: 'Tilte is required'
        })
    }
}

function getNotes(req, res){
    Note.find({}).exec((err, notes) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(notes){
                res.status(200).send({
                    notes
                });
            } else {
                res.status(404).send({
                    message: 'Notes not found'
                })
            }
        }
    });
}

function getNote(req, res){
    var noteId = req.params.id;

    Note.findById(noteId).exec((err, note) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(note){
                res.status(200).send({
                    note
                });
            } else {
                res.status(404).send({
                    message: 'Notes not found'
                })
            }
        }
    });
}

function updateNote(req, res){
    var noteId = req.params.id;
    var update = req.body;

    // Deprecated
    Note.findByIdAndUpdate(noteId, update, {new:true}, (err, noteUpdated) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(noteUpdated){
                res.status(200).send({
                    note: noteUpdated
                });
            } else {
                res.status(404).send({
                    message: 'Note not found'
                });
            }
        }
    });
}

function deleteNote(req, res) {
    var noteId = req.params.id;

    Note.findByIdAndRemove(noteId, (err, noteRemoved) => {
        if(err) {
            res.status(500).send({
                message: 'Server error'
            })
        } else {
            if(noteRemoved){
                res.status(200).send({
                    note: noteRemoved
                });
            } else {
                res.status(404).send({
                    message: 'Note not found'
                });
            }
        }
    })
}

module.exports = {
    pruebas,
    saveNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}
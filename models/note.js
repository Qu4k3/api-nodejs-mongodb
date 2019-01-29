'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoteSchema = Schema({
    title: String,
    content: String,
    private: Boolean/*,
    tags: Array,
    book: String,
    createData: Date*/
});

module.exports = mongoose.model('Note', NoteSchema);
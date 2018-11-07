var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var heroSchema   = new Schema({
    name: String,
    type: String,
    set: String
});

module.exports = mongoose.model('Hero', heroSchema);

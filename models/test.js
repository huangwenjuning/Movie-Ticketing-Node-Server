var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
    "name": String,
    "age": Number
});

module.exports = mongoose.model('Test', testSchema);

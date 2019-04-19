var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var filmKindSchema = new Schema({
    "id": Number, // 索引
    "description": String // 分类描述
});

module.exports = mongoose.model('FilmKind', filmKindSchema, 'filmKinds');
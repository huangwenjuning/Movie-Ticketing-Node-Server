var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var tabbarSchema = new Schema({
    "id": Number, // 索引
    "text": String, // 文本
    "icon": String,  // icon
    "path": String  // 路径
});

module.exports = mongoose.model('Tabbar', tabbarSchema, 'tabbar');
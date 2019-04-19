 var mongoose = require('mongoose');
 var Schema = mongoose.Schema;

 var filmSchema = new Schema({
     "id": Number, // 索引
     "filmName": String, // 电影名
     "moviePoster": String, // 电影海报
     "filmKinds": Array, // 电影分类
     "filmScore": Number, // 电影评分
     "synopsis": String, // 电影简介
     "releaseDate": String, // 电影放映时间
     "filmDuration": String, // 电影时长
     "filmActors": String, // 电影主演
     "filmWantPeople": Number // 电影想看人数
 });

 module.exports = mongoose.model('Film', filmSchema, 'films');
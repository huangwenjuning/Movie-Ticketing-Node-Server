var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Test = require('../models/test');

// 连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/test', {useNewUrlParser: true});
mongoose.connection.on("connected", function () {
    console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function (error) {
    console.log(error);
    console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function (e) {
    console.log(e, 'e');
    console.log("MongoDB connected disconnected.")
});

router.get('/', function (req, res, next) {
    res.send('我是无骛');
})

module.exports = router;
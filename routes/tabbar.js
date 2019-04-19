var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Tabbar = require('../models/tabbar');

// 连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/movie', {useNewUrlParser: true});
mongoose.connection.on("connected", function () {
    console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function (error) {
    console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function (e) {
    console.log("MongoDB connected disconnected.")
});

router.get('/', function (req, res, next) {
    Tabbar.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: 'error',
                msg: err.message
            });
        } else {
            res.json({
                status: '0',
                msg: 'ok',
                data: {
                    count:doc.length,
                    tabbarList: doc
                }
            })
        }
    })
})

module.exports = router;
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Film = require('../models/film');
var FilmKind = require('../models/filmKind');

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
    Film.find({}, function(err, doc) {
        if (err) {
            res.json({
                status: '1',
                msg: 'error',
                msg: err.message
            });
        } else {
            if (doc) {
                res.json({
                    status: '0',
                    msg: 'ok',
                    data: {
                        count: doc.length,
                        filmList: doc
                    }
                })
            }
            // if (doc) {
            //     const promises = doc.map((item, index) => {
            //         let p1 = new Promise(function (resolve1, reject1) {
            //             const promises = item.filmKinds.map(id => {
            //                 let p2 = new Promise(function (resolve2, reject2) {
            //                     FilmKind.findOne({id: id}, function (err, doc) {
            //                         if (err) {
            //                             reject2(err);
            //                         } else {
            //                             resolve2(doc);
            //                         }
            //                     })
            //                 });
            //                 return p2;
            //             });
            //             Promise.all(promises).then(data => {
            //                 let filmKinds = '';
            //                 data.forEach(des => {
            //                     filmKinds += `${des.description}/`;
            //                 })
            //                 item.filmKinds = filmKinds;
            //                 resolve1(item);
            //             })
            //         })
            //         return p1;
            //     });
            //     Promise.all(promises).then(data => {
            //         res.json({
            //             status: '0',
            //             msg: 'ok',
            //             data: {
            //                 count: data.length,
            //                 filmDetail: data
            //             }
            //         })
            //     })
            // }
        }
    });
});

router.post('/filmDetail', function (req, res, next) {
    var filmId = req.body.filmId;
    Film.findOne({id: filmId}, function (err, filmDetailDoc) {
        if (err) {
            res.json({
                status: '1',
                msg: err.message
            })
        } else {
            if (filmDetailDoc) {
                const promise = filmDetailDoc.filmKinds.map((item, index) => {
                    let p = new Promise(function (resolve, reject) {
                        FilmKind.find({id: item}, function (err, doc) {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(doc);
                            }
                        });
                    })
                    return p;
                });
                Promise.all(promise).then(data => {
                    let filmKinds = '';
                    data[0].forEach(des => {
                        filmKinds += `${des.description}/`;
                    })
                    filmDetailDoc.filmKinds = filmKinds;
                    res.json({
                        status: '0',
                        msg: 'ok',
                        data: {
                            count: filmDetailDoc.length,
                            filmDetail: filmDetailDoc
                        }
                    })
                });
            }
        }
    })
})

module.exports = router;

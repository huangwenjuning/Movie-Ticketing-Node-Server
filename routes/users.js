var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', function(req, res, next) {
  res.send('test');
});

debugger;
router.get('/test1', function(req, res, next) {
  res.send('test1');
});
module.exports = router;

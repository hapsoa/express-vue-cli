var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/practice1', function(req, res, next) {
    res.render('practice_1');
});

router.get('/practice2', function(req, res, next) {
    res.render('practice_2');
});

module.exports = router;

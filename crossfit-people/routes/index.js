var express = require('express');
var router = express.Router();
var hbs = require('handlebars');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

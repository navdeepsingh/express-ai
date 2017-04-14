'use strict';

var express = require('express')
var router = express.Router();
var controller = require('./controllers');


router.get('/', controller.main);
router.get('/auth', controller.auth);
router.get('/view-feeds', controller.viewFeeds);
router.get('/analyze', controller.analyze);
router.get('/results', controller.results);

module.exports = router;

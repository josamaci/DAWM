var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const auto = require('../models').producto;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
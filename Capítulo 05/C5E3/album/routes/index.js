var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Producto = require('../models').producto;
const Photo = require('../models').photo;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
    router.get('/productos', function(req, res, next) {
        res.render('productos', { title: 'Productos' });
    })
});

module.exports = router;
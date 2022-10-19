var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const Photo = require('../models').photo;

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');

});

router.get('/album', function(req, res, next) {
    Photo.findAll()
        .then(photos => {
            res.json(photos);
        })
        .catch(error => res.status(400).send(error))
});


router.get('/album/:id', function(req, res, next) {
    Photo.findOne({ where: { id: req.params.id } })
        .then(photos => {
            res.json(photos)
        })
        .catch(error => res.status(400).send(error))
});
module.exports = router;
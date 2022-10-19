var express = require('express');
var router = express.Router();
const { Sequelize, Op } = require('sequelize');
const auto = require('../models').auto;

/* GET users listing. */
router.get('/valores/datos', function(req, res, next) {
    auto.findAll({
            attributes: { exclude: ["updatedAt"] }
        })
        .then(autos => {
            res.json(autos)
        })
        .catch(error => res.status(400).send(error))
});

router.get('/valores/vista', function(req, res, next) {
    auto.findAll({
            attributes: { exclude: ["updatedAt"] }
        })
        .then(autos => {
            res.render('auto', { title: 'Autos', arrAutos: autos });
        })
        .catch(error => res.status(400).send(error))
});

module.exports = router;
var express = require('express');
const axios = require('axios')
var router = express.Router();

const myapp = 'c5e4-5d76c'

/* GET all. */
router.get('/', (req, res, next) => {

    axios.get(`https://${myapp}-default-rtdb.firebaseio.com/movies.json`)
        .then(resAxios => {
            res.json(resAxios.data)
        })
        .catch(err => console.log(err))

});

/* GET one. */
router.get('/:id', (req, res, next) => {
    axios.get(`https://${myapp}-default-rtdb.firebaseio.com/movies/${req.params.id}.json`, {})
        .then(resAxios => {
            res.json(resAxios.data)
        })
        .catch(err => console.log(err))


});



/* POST. */
router.post('/:id', (req, res, next) => {
    let obj = {
        "genre": req.body.genre,
        "inflation_adjusted_gross": req.body.inflation_adjusted_gross,
        "movie_title": req.body.movie_title,
        "mpaa_rating": req.body.mpaa_rating,
        "release_date": req.body.release_date,
        "total_gross": req.body.total_gross
    }
    axios.post(`https://${myapp}-default-rtdb.firebaseio.com/movies/${req.params.id}.json`, obj)
        .then(resAxios => {
            res.json(resAxios.data)
        })
        .catch(err => console.log(err))


});

/* PUT. */
router.put('/:id', (req, res, next) => {
    let obj = {
        "genre": req.body.genre,
        "inflation_adjusted_gross": req.body.inflation_adjusted_gross,
        "movie_title": req.body.movie_title,
        "mpaa_rating": req.body.mpaa_rating,
        "release_date": req.body.release_date,
        "total_gross": req.body.total_gross
    }
    axios.put(`https://${myapp}-default-rtdb.firebaseio.com/movies/${req.params.id}.json`, obj)
        .then(resAxios => {
            res.json(resAxios.data)
        })
        .catch(err => console.log(err))
});

/* DELETE. */
router.delete('/:id', (req, res, next) => {
    axios.delete(`https://${myapp}-default-rtdb.firebaseio.com/movies/${req.params.id}.json`)
        .then(resAxios => {
            res.json(resAxios.data)
        })
        .catch(err => console.log(err));


});

module.exports = router;
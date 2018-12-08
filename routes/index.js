const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

router.get('/about', function (req, res, next) {
    res.render('about');
});

router.get('/services', function (req, res, next) {
    res.render('services');
});

router.get('/contact-us', function (req, res, next) {
    res.render('contactUs');
});

module.exports = router;

// routers/index.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home', {layout: 'index'});
});


router.get('/project', (req, res) => {
    res.render('project', {layout: 'index'});
});
router.get('/contact', (req, res) => {
    res.render('contact', {layout: 'index'});
});


router.get('/blog', (req, res) => {
    res.render('blog', {layout: 'index'});
});


module.exports = router;
